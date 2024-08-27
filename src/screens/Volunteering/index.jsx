import styles from "../../styles/StandardStyles.module.css"

import { Navbar } from "../../components/Navbar"
import { VoluntaryImg } from "../../components/VoluntaryImg"
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"

export function Volunteering() {
    return (
        <div>
            <Navbar />

            <body>
                <VoluntaryImg />

                <div className={styles.standardContainer}>
                    <Cards />
                </div>
            </body>

            <Footer />
        </div>
    )
}