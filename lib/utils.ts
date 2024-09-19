import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { WritingType } from "@/types/writingType";
import jsPDF from 'jspdf';

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function generateWriting(type: WritingType, difficulty: string, context: string): Promise<string> {

  const prompt = `Write a/an ${type.label} on the topic of ${context}. The ${type.label} should be for ${difficulty === "simple" ? "school" : "college"} students. Write the ${type.label} within {} brackets. And don't use bold or italic text and no need for any title. The ${type.label} must have minimum ${type.min_words} words and maximum ${type.max_words} words.The word limit must be followed.
  ${type.label==="Dialogue"?"For Dialogue write like this: Person 1: .... Person 2: ....":""}`;
  console.log(prompt);

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    console.log(response);

    return extractTextBetweenCurlyBrackets(response);

  } catch (error) {
    console.error("Error fetching answer:", error);
    return "Sorry, we’re unable to process your request at the moment due to policy restrictions or high demand. Please try again later.";
  }
}

function extractTextBetweenCurlyBrackets(text: string): string {
  const match = text.match(/{([^}]*)}/);
  return match ? match[1] : "Sorry, we’re unable to process your request at the moment due to policy restrictions or high demand. Please try again later.";
}

export async function downloadWriting(type: WritingType, context: string, answer: string) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor("#009cfd");
  doc.setFont("Noto Sans", "bold");
  doc.text("Sirius Writing", doc.internal.pageSize.getWidth() / 2, 10, { align: "center" });

  doc.setFontSize(15);
  doc.setFont("Noto Sans", "normal");
  doc.setTextColor("#ff5733");
  let title;
  if (type.label == "Summary") {
    title = "Summary";
  } else {
    title = `${type.label} on ${context}`;
  }

  doc.text(title, doc.internal.pageSize.getWidth() / 2, 25, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor("#000000");



  doc.text(answer, 10, 40, { align: "left", maxWidth: doc.internal.pageSize.getWidth() - 20 });



  let curHeight = doc.internal.pageSize.getHeight() - 20;

  doc.setTextColor("#ff5733")
  doc.setFontSize(11);

  doc.text("Powered by Sirius Academic and Admission Care", doc.internal.pageSize.getWidth() / 2, curHeight, { align: "center" });
  doc.setTextColor("161d6f")
  doc.setFontSize(10);
  doc.text("email: siriusacademy47@gmail.com", doc.internal.pageSize.getWidth() / 2, curHeight + 5, { align: "center" });

  doc.text("facebook: https://www.facebook.com/sirius2047/", doc.internal.pageSize.getWidth() / 2, curHeight + 10, { align: "center" });


  const imgUrl = '/sirius_logo.png';
  const imgBase64 = await fetch(imgUrl)
    .then(response => response.blob())
    .then(blob => new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }));

  const imgWidth = 120;
  const imgHeight = 120;
  const x = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
  const y = (doc.internal.pageSize.getHeight() - imgHeight) / 2;

  doc.setGState(new (doc as any).GState({ opacity: 0.1 }));
  doc.addImage(imgBase64, 'PNG', x, y, imgWidth, imgHeight, '', 'FAST');
  doc.setGState(new (doc as any).GState({ opacity: 1 }));

  if (type.label == "Summary") {
    doc.save(`${type.label}.pdf`);
  } else {
    doc.save(`${type.label}-${context}.pdf`);
  }


}



