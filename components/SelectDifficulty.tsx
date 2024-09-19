"use client"
import { useState, useContext } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { difficulties } from "@/data/difficulties"
import { noto_sans } from "@/lib/fonts"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AppContext } from "@/contexts/AppContext"


export function SelectDifficulty() {
    const [open, setOpen] = useState(false)
    const appContext = useContext(AppContext)

    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { difficulty, setDifficulty } = appContext;


    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`bg-[var(--bg-secondary)] text-white transform hover:scale-[120%] transition-transform text-sm md:text-lg p-5 ${noto_sans.className}`}
                >
                    {difficulty
                        ? difficulties.find((difficultyItem) => difficultyItem.value === difficulty)?.label
                        : "Select Difficulty"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="center" side="bottom" sideOffset={4} avoidCollisions={false} className="p-0">
                <Command className="bg-[var(--bg-secondary)]">
                    <CommandList>
                        <CommandEmpty className="text-sm md:text-lg text-white">
                            No Difficulty Selected.
                        </CommandEmpty>
                        <CommandGroup>
                            {difficulties.map((difficultyItem) => (
                                <CommandItem
                                    key={difficultyItem.id}
                                    value={difficultyItem.value}
                                    onSelect={(currentValue) => {
                                        setDifficulty(currentValue === difficulty ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                    className={`text-white text-sm md:text-md ${noto_sans.className}` }

                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            difficulty === difficultyItem.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {difficultyItem.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
