import Image from 'next/image';
import { SiGmail } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="w-full flex justify-between items-center bg-[var(--bg-secondary)] gap-6">
            <div className="flex justify-between items-center p-2 md:p-4">
                <img src="/sirius_logo.png" alt="Sirius Logo" className="w-[4rem] h-[4rem]" />
                <p className="text-white text-xs  md:text-lg ml-1 md:ml-3 text-nowrap">Sirius Academic & Admission Care</p>
            </div>
            <div className='flex flex-col justify-start items-center p-2 md:p-4 gap-3'>
                <p className="text-white text-sm md:text-xl text-nowrap">Contact Us:</p>
                <div className="flex gap-3">
                    <p className="text-white text-sm">
                        <a href="mailto:siriusacademy47@gmail.com" className="flex items-center gap-2 ">
                            <SiGmail className="text-white text-3xl"/>
                        </a>
                    </p>
                    <p className="text-white text-sm">
                        <a href="https://www.facebook.com/sirius2047/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaSquareFacebook className="text-white text-3xl" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )

};
