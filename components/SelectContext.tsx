"use client"

import { AppContext } from "@/contexts/AppContext";
import { useContext } from "react";
import { noto_sans } from "@/lib/fonts";


export default function SelectContext() {

    const appContext = useContext(AppContext);

    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { context, setContext } = appContext;

    return (
        <div className={`${noto_sans.className} w-full`}>
            <div className="flex flex-col gap-4 justify-center items-center">
                <textarea
                    placeholder="Enter The Topic"
                    value={context}
                    onChange={(e) => setContext(e.target.value)}
                    className="w-[80%] md:w-[50%] h-[30vh] text-left align-text-top text-sm text-black placeholder:text-black md:text-lg focus:text-white focus:placeholder-white focus:bg-[var(--bg-secondary)] focus:border-[var(--bg-secondary)] p-5 border-2 rounded-lg"
                />
            </div>
        </div>
    )

};
