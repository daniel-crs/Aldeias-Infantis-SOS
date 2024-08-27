import styles from "./Cards.module.css"

import img from "../../assets/image_4.png"

export function Cards() {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.bodyImg}>
                    <img src={img} alt="" />
                    <div className={styles.info}>
                        <div className={styles.text}>   
                            <h3>Meio Ambiente</h3>

                            <p>
                                Participar de ações de preservação ambiental, como limpeza de áreas públicas, plantio de árvores e educação ambiental para a comunidade. 
                                O voluntário ajudará na organização e execução das atividades de preservação.
                            </p>
                        </div>

                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}