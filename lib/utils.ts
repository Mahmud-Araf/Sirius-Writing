import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { WritingType } from "@/types/writingType";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY||"";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function generateWriting(type: WritingType, difficulty: string, context: string): Promise<string> {
  const prompt = `Write a/an ${type.label} on the topic of ${context}. The ${type.label} should have minimum ${type.min_words} words and maximum ${type.max_words} words. The ${type.label} should be for class ${difficulty === "Simple" ? "9" : "12"}. Write the ${type.label} within {} brackets. And don't use bold or italic text and no need for any title.`;
  console.log(prompt);

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    console.log(response);

    return extractTextBetweenCurlyBrackets(response);

  } catch (error) {
    console.error("Error fetching answer:", error);
    return "Sorry, the topic violets our policy. Please try other topics.";
  }
}

function extractTextBetweenCurlyBrackets(text: string): string {
  const match = text.match(/{([^}]*)}/);
  return match ? match[1] : "";
}



