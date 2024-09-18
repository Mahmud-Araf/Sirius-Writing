
import { SiGmail } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
    return (
        <div className="w-full flex justify-between items-center  gap-6">
            <div className="flex justify-between items-center p-2 md:p-4">
                <a href='https://www.facebook.com/profile.php?id=100085487773552' target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" >
                    <img src="/sirius_logo.png" alt="Sirius Logo" className="w-[4rem] md:w-[5rem] h-[4rem] md:h-[5rem] border-2 md:border-4 p-1 border-[var(--bg-secondary)] rounded-full" />
                    <p className="text-xs md:text-xl ml-1 text-[var(--bg-secondary)] font-bold md:ml-3">Sirius Academic & Admission Care</p>
                </a>
            </div>
            <div className='flex flex-col justify-start items-center p-2 md:p-4 gap-3'>
                <p className={`text-[var(--bg-secondary)] text-sm md:text-xl text-nowrap font-bold`}>Contact Us:</p>
                <div className="flex gap-3">
                    <p className="text-white text-sm">
                        <a href="mailto:siriusacademy47@gmail.com" className="flex items-center gap-2 ">
                            <SiGmail className="text-red-500 text-xl md:text-3xl" />
                        </a>
                    </p>
                    <p className="text-white text-sm">
                        <a href="https://www.facebook.com/sirius2047/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaSquareFacebook className="text-[var(--bg-secondary)] text-xl md:text-3xl" />
                        </a>
                    </p>
                    <p className="text-white text-sm">
                        <a href="https://www.youtube.com/@sirius2047" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <IoLogoYoutube className="text-red-500 text-xl md:text-3xl" />
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )

};
