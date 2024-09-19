import { sofadi_one } from "@/lib/fonts"
import AnswerSection from "../AnswerSection"

export default function AnswerPage() {
    return (
        <div className='w-full flex flex-col gap-6 justify-start items-center overflow-auto'>
            <div className={sofadi_one.className}>
                <h1 className='text-2xl md:text-5xl text-[var(--bg-secondary)] font-extrabold p-2'>Sirius Writing...</h1>
            </div>
            <AnswerSection />
        </div>
    )
};
