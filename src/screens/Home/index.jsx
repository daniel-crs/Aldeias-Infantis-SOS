import { Navbar } from "../../components/Navbar"
import { VoluntaryBanner } from "../../components/VoluntaryBanner"
// import { Footer } from "../../components/Footer"

export function Home() {
    return (
        <div>
            <Navbar />

            <body>
                <VoluntaryBanner />
            </body>

            {/* <Footer/> */}
        </div>
    )
}