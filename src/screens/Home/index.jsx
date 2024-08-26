import { Navbar } from "../../components/Navbar"
import { Footer } from "../../components/Footer"
import { Backgroundhome } from "../../components/Backgroudhome"



export function Home() {
    return (
        <div>
            <Navbar/>
            <body>
                <Backgroundhome/>
            </body>
            <Footer/>
        </div>
    )
}