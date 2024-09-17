import { sofadi_one } from "@/lib/fonts"
import AnswerSection from "../AnswerSection"

export default function AnswerPage() {
    return(
        <div className='w-full min-h-screen flex flex-col gap-8 justify-start items-center overflow-auto'>
        <div className={sofadi_one.className}>
            <h1 className='text-4xl md:text-8xl text-[var(--bg-secondary)] font-extrabold p-3'>Sirius Writing</h1>
        </div>
        <AnswerSection/>
    </div>
    )
};
