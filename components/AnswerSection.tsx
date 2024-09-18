"use client"
import { AppContext } from "@/contexts/AppContext";
import { useContext, useEffect, useState } from "react";
import { lora, noto_sans } from "@/lib/fonts";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlineContentCopy } from "react-icons/md";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { generateWriting,downloadWriting } from "@/lib/utils";

export default function AnswerSection() {

    const appContext = useContext(AppContext);
    const router = useRouter();

    const errorMsg = "Sorry, we’re unable to process your request at the moment due to policy restrictions or high demand. Please try again later.";


    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { type, difficulty, context } = appContext;

    const [answer, setAnswer] = useState("");
    const [copied, setCopied] = useState(false);
    const [downloaded, setDownloaded] = useState(false);
    const [copyError, setCopyError] = useState(false);

    useEffect(() => {
        if(!type|| !difficulty || !context) {
            router.push("/");
            return;
        }
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

    async function downloadHandler(){

        setDownloaded(true);

        await downloadWriting(type, context, answer);

        setTimeout(() => {
            setDownloaded(false);
        }, 1000);

    }

    return (
        <div className={`w-full flex flex-col justify-center items-center overflow-auto`}>
            <h1 className={`${noto_sans.className} text-md md:text-4xl p-3 text-[var(--bg-secondary)] text-center overflow-hidden text-ellipsis whitespace-nowrap w-[90%]`}>
                {`${type.label} on ${context}`}
            </h1>
            {
                !answer && (
                    <div className={`${lora.className} text-md md:text-lg p-3 text-center`}>
                        Generating your writing...
                    </div>
                )
            }
            <pre className={`${lora.className} w-[90%] text-sm md:text-lg p-3 text-wrap tracking-wide whitespace-pre-wrap`}>
                {answer}
            </pre>
            {copied && <div className={`${noto_sans.className} text-[var(--bg-secondary)] text-lg p-4`}>Copied to clipboard</div>}
            {copyError && <div className={`${noto_sans.className} text-red-500 text-lg p-4`}>Failed to copy to clipboard</div>}
            {downloaded && <div className={`${noto_sans.className} text-[var(--bg-secondary)] text-lg p-4`}>Downloading Started</div>}
            {
                answer && (copied == false) && (downloaded == false) && (answer!==errorMsg) && (
                    <div className="w-[60%] flex items-center justify-between p-8">
                        <TiArrowBack className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={() => router.push("/")} />
                        <MdOutlineContentCopy className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={handleCopy} />
                        <PiDownloadSimpleBold className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={downloadHandler} />
                    </div>
                )
            }
            {
                !answer && (copied == false) && (downloaded == false) &&  (
                    <div className="w-[60%] flex items-center justify-center p-8">
                        <TiArrowBack className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={() => router.push("/")} />
                    </div>
                )
            }
            {
                (answer === errorMsg) &&  (
                    <div className="w-[60%] flex items-center justify-center p-8">
                        <TiArrowBack className="text-3xl text-[var(--bg-secondary)] cursor-pointer" onClick={() => router.push("/")} />
                    </div>
                )
            }
        </div>
    );
}