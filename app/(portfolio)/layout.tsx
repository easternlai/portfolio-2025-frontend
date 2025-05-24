import { cn } from "@/lib/utils"
import { Header } from "./_components/header"
import { Inter } from "next/font/google"

const mainFont = Inter({
    subsets: ["latin"],
    weight: [
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800"
    ]
})

const PortfolioLayout = ({ children }: { children: any }) => {

    return (
        <div className={cn(mainFont.className, " sm:mx-12 md:mx-16 lg:mx-64 xl:96 px-12 md:pt-12")}>
            <Header />
            <div>
                {children}
            </div>
        </div>
    )
}

export default PortfolioLayout