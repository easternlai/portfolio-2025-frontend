import Image from "next/image"
import NavLink from "./navlink"
import { Rubik } from "next/font/google"
import { cn } from "@/lib/utils"
const headingFont = Rubik({
    subsets: ["latin"],
    weight: [
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
    ]
})
export const Header = () => {
    return (
        <div className="md:flex md:space-x-14 mb-12 ">
            <div className="md:min-w-36 hidden md:inline ">
                <Image className="rounded-full" src="/profile.png" width={150} height={100} alt="Organization" />
            </div>

            <div className={cn(headingFont.className, "flex-col")}>
                <div className="flex justify-center md:justify-normal">
                    <a href="/" className="pb-3 border-b-8 border-[#4B6CC1] text-6xl md:text-5xl md:font-bold mt-4">EASTERN LAI</a>
                </div>
                <nav className="flex justify-center space-x-4 md:justify-normal sm:space-x-4 xl:md:space-x-10 mt-8 text-3xl">
                    <NavLink href="/career" className="">Career</NavLink>
                    <NavLink href="/projects" className="min-w-40">Projects</NavLink>
                    <NavLink href="/about" className="">Contact</NavLink>
                </nav>
            </div>
        </div>
    )
}