import styles from "./JobsCard.module.css";
import { useState } from "react";

export function JobsCard({ img, title, text, num }) {
    
    const CardRender = () => {
        if ((num % 2) !== 0) {
            return (
                <div className={styles.cardContainer}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="img-right" />
                    </div>

                    <div className={styles.elements}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <div className={styles.btn}>
                            <a href="#">Saiba mais</a>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.cardContainer}>
                    <div className={styles.elements}>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <div className={styles.btn}>
                            <a href="#">Saiba mais</a>
                        </div>
                    </div>

                    <div className={styles.imgContainer}>
                        <img src={img} alt="img-right" />
                    </div>
                </div>
            )
        }
    }


    return (
        <div className={styles.container}>
            <CardRender />
        </div>
    )
};