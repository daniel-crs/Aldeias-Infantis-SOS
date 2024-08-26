import styles from "./Backgroundhome.module.css";
import backgroundImage from "../../assets/backgroundImage.png";

export function Backgroundhome() {
    return (
        <div className={styles.container} >
            <img src={backgroundImage} alt="" />
            <div className={styles.imageOverlay}>
                <h1 className={styles.title}>SEJA UM VOLUNTÁRIO!</h1>
                <p className={styles.text}>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo
                    utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou
                    para fazer um livro de modelos de tipos.
                </p>
                <button className={styles.button}>Quero ser um Voluntário SOS</button>
            </div>
        </div>
    );
}