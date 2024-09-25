import { recipeSchema } from "@/src/recipeSchema";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { zodResponseFormat } from "openai/src/helpers/zod.js";



const modelName = "gpt-4o-2024-08-06";

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const client = new OpenAI();

  const response = await client.chat.completions.create({
    model: modelName,
    messages: [
      {
        role: "user",
        content: `Recipe for ${prompt || 'Pizza 4 fromages'}`,
      },
    ],
    response_format: zodResponseFormat(recipeSchema, "recipeSchema"),
  });

  return NextResponse.json(
    JSON.parse(response.choices[0].message.content || "")
  );
}