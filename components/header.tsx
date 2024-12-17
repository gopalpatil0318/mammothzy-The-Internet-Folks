import Image from 'next/image'
import Link from 'next/link'
import { LuUserRound } from "react-icons/lu";

export function Header() {
    return (
        <header className="flex justify-between items-center px-[120px] py-[18px] border-b border-[#E7E7E7] h-[97px]">
            {/* Fixed Inner Layout */}
            <div className="w-[1248px] h-[75px] flex justify-between items-center mx-auto">

                <Link href="/" className="flex items-center gap-4">
                    <Image
                        src="/image.png"
                        alt="Mammothzy"
                        width={195.25}
                        height={75}
                        className="dark:invert"
                    />
                </Link>

                {/* Profile Section */}
                <div className="flex items-center gap-2 w-[94px] h-[36px]">
                    {/* Background circle div */}
                    <div
                        className="w-[36px] h-[36px] rounded-full bg-[#EEEEEE] opacity-100 items-center flex justify-center"
                    >
                         <LuUserRound
                        className="w-[17.14px] h-[17.14px] text-gray-600 opacity-100"
                    />
                    </div>

                 
                   

                    {/* Profile text */}
                    <span className="text-[16px] font-semibold leading-[24px] text-[#2E2B2B] font-inter">
                        Profile
                    </span>
                </div>
            </div>
        </header>
    )
}
