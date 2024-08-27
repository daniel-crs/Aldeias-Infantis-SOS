import styles from "./VoluntaryImg.module.css"

import backgroundImage from "../../assets/bg_2.png";

export function VoluntaryImg() {
    return (
        <div className={styles.container} >
            <img src={backgroundImage} alt="" />
            <div className={styles.imageOverlay}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>VOLUNTARIADO</h1>
                </div>
                <p className={styles.text}>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
                    utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou
                    para fazer um livro de modelos de tipos.
                </p>
                <button className={styles.button}>Sugerir novos serviços</button>
            </div>
        </div>
    )
}