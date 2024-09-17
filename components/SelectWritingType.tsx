"use client"
import { useState, useContext } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { writingTypes } from "@/data/writingTypes"
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
import defaultWritingType from "@/types/writingType"

export function SelectWritingType() {
    const [open, setOpen] = useState(false)
    const appContext = useContext(AppContext)

    if (!appContext) {
        throw new Error("AppContext is undefined");
    }

    const { type, setType } = appContext

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`bg-[var(--bg-secondary)] text-white transform hover:scale-[120%] transition-transform text-sm md:text-lg p-5 ${noto_sans.className}`}
                >
                    {type?.label ? (
                        writingTypes.find((writingType) => writingType.value === type.value)?.label
                    ) : (
                        "Select Your Writing Item"
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="center" side="bottom" sideOffset={4} avoidCollisions={false} className="p-0 overflow-auto">
                <Command className="bg-[var(--bg-secondary)]">
                    <CommandInput placeholder="Search..." className={`text-white ${noto_sans.className}`} />
                    <CommandList>
                        <CommandEmpty className="text-sm md:text-lg text-white">
                            No Writing Type found.
                        </CommandEmpty>
                        <CommandGroup>
                            {writingTypes.map((writingType) => (
                                <CommandItem
                                    key={writingType.id}
                                    value={writingType.value}
                                    onSelect={() => {
                                        if (type?.value === writingType.value) {
                                            setType(defaultWritingType)
                                            setOpen(false)
                                            return
                                        }
                                        setType(writingType)
                                        setOpen(false)
                                    }}
                                    className={`text-white text-xs md:text-lg ${noto_sans.className}`}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            type?.value === writingType.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {writingType.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}