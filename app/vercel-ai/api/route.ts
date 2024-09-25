import { recipeSchema } from "@/src/recipeSchema";
import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { NextResponse } from "next/server";

const modelName = "gpt-4o-2024-08-06"

export async function POST(request: Request)
{
  const { prompt } = await request.json();
  const { object } = await generateObject({
    model: openai(modelName),
    schema: recipeSchema,
    prompt: `Recipe for ${prompt || 'Pizza 4 fromages'}`
  })
  return NextResponse.json(object)
}