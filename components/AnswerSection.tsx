"use client"
import { AppContext } from "@/contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import { noto_sans } from "@/lib/fonts";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { generateWriting } from "@/lib/utils";

export default function AnswerSection() {

    const appContext = useContext(AppContext);
    const router = useRouter();

    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { type, difficulty, context } = appContext;

    const [answer, setAnswer] = useState("");
    const [copied, setCopied] = useState(false);
    const [copyError, setCopyError] = useState(false);

    useEffect(() => {
        async function fetchAnswer() {
            const text = await generateWriting(type, difficulty, context);
            setAnswer(text);
        }
        fetchAnswer();
    }, []);

    const handleCopy = () => {
        try {
            setCopied(true);
        
            const textarea = document.createElement("textarea");
            textarea.value = answer;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        } catch (error) {
            setCopyError(true);
            setTimeout(() => {
                setCopyError(false);
            }, 1000);
        }
    };

    return (
        <div className={`${noto_sans.className} w-full flex flex-col justify-center items-center overflow-auto`}>
            <h1 className="text-lg md:text-4xl p-3 text-[var(--bg-secondary)] text-center">{`${type.label} on ${context}`}</h1>
            <pre className="w-[90%] text-sm md:text-lg p-3 text-wrap tracking-wide whitespace-pre-wrap">
                {answer}
            </pre>
            {copied && <div key={Date.now()} className="text-[var(--bg-secondary)] text-lg p-4">Copied to clipboard</div>}
            {copyError && <div key={Date.now()} className="text-red-500 text-lg p-4">Failed to copy to clipboard</div>}
            <div className="flex items-center justify-center gap-8 p-8">
                <TiArrowBack className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={() => router.push("/")} />
                <MdOutlineContentCopy className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={handleCopy} />
                <PiDownloadSimpleBold className="text-3xl text-[var(--bg-secondary)] cursor-pointer" />
            </div>
            
        </div>
    );
}