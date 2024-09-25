"use client";
import { parse } from "partial-json";
import { useState } from "react";
import { z } from "zod";

import { RecipeCard } from "@/components/recipe-card";
import { Input } from "@/components/ui/input";

import { Loading } from "@/components/loading";
import { recipeSchema } from "@/src/recipeSchema";

export default function SyncPage() {
  const [prompt, setPrompt] = useState("chocolate brownies");
  const [isLoading, setIsLoading] = useState(false);
  const [recipe, setRecipe] = useState<z.infer<typeof recipeSchema>>();

  async function handleSubmit() {
    setPrompt("");
    setIsLoading(true);
    setRecipe(undefined);

    const res = await fetch("/streaming/api", {
      method: "POST",
      body: JSON.stringify({ prompt: "chocolate brownies" }),
    });

    const reader = res.body?.getReader();
    if (!reader) {
      return {};
    }

    const decoder = new TextDecoder();
    let data = "";
    let parsed = {};
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      data += decoder.decode(value);
      parsed = parse(data);
      setRecipe(parsed as z.infer<typeof recipeSchema>);
    }

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <Input
        value={prompt}
        disabled={isLoading}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={async (e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        placeholder="What recipe do you want?"
      />
      {isLoading && <Loading />}
      <RecipeCard recipe={recipe} />
    </div>
  );
}