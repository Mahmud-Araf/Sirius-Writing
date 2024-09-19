"use client"
import { noto_sans, sofadi_one } from "@/lib/fonts";
import SelectContext from "../SelectContext";
import { SelectWritingType } from "../SelectWritingType";
import { SelectDifficulty } from "../SelectDifficulty";
import { Button } from "../ui/button";
import { useContext } from "react";
import { AppContext } from "@/contexts/AppContext";
import { ToastContainer, toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";          
import { useRouter } from "next/navigation";

export default function QuestionPage() {
    
    const appContext = useContext(AppContext);
    const router = useRouter();

    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { type,  difficulty, context } = appContext;

    async function handleSubmission(){

        if (context === '') {
           
            toast.info(
                <div className="flex items-center gap-2">
                    <span>Please fill the topic field</span>
                </div>,
                {
                    position: "bottom-right", 
                    autoClose: 3000,    
                }
            );

            return;
        } 
        else if(type.value === '') {
            toast.info(
                <div className="flex items-center gap-2">
                    <span>Please select the writing type</span>
                </div>,
                {
                    position: "bottom-right", 
                    autoClose: 3000,    
                }
            );

            return;
        }
        else if (difficulty === '') {
            toast.info(
                <div className="flex items-center gap-2">
                    <span>Please select the difficulty</span>
                </div>,
                {
                    position: "bottom-right", 
                    autoClose: 3000,    
                }
            );

            return;
        }

        router.push("/answer");
    };

    return (
        <div className='w-full flex flex-col gap-6 justify-start items-center overflow-auto'>
            <div className={sofadi_one.className}>
                <h1 className='text-2xl md:text-5xl text-[var(--bg-secondary)] font-extrabold p-2'>Sirius Writing...</h1>
            </div>
            <SelectContext />
            <SelectWritingType />
            <SelectDifficulty />
            <Button
                onClick={handleSubmission} 
                className={`bg-[var(--bg-secondary)] text-white transform hover:scale-[120%] transition-transform text-sm md:text-lg p-5 ${noto_sans.className}`}
            >
                Get Your Answer
            </Button>
            <ToastContainer /> 
        </div>
    );
}