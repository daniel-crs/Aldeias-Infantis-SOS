import styles from "./JobsDone.module.css"

export function JobsDone() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.sideBar}></div>
                <h3>Trabalhos Realizados</h3>
                <div className={styles.sideBar}></div>
            </div>
        </div>
    )
}