import styles from "../../styles/StandardStyles.module.css"

import { Navbar } from "../../components/Navbar";
import { VoluntaryBanner } from "../../components/VoluntaryBanner";
import { JobsDone } from "../../components/JobsDone";
// import { Footer } from "../../components/Footer;"

export function Home() {
    return (
        <div>
            <Navbar />

            <body>
                <VoluntaryBanner />

                <div className={styles.standardContainer}>
                    <JobsDone />
                </div>
                    
            </body>

            {/* <Footer/> */}
        </div>
    )
}