import styles from "./JobsDone.module.css"

import { JobsCard } from "../JobsCard"
import img1 from "../../assets/card_img_1.png";
import img2 from "../../assets/card_img_2.png";
import img3 from "../../assets/card_img_3.png";


export function JobsDone() {
    const options = [
        { 
            img: img1, 
            title: "Doãção de brinquedo em taguatinga",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum.",
            num: 1
        }, 
        { 
            img: img2, 
            title: "Distribuição de alimentos",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum.",
            num: 2
        },{ 
            img: img3, 
            title: "Festa de natal para crianças de periferia",
            text: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum.",
            num: 3
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.sideBar}></div>
                <h3>Trabalhos Realizados</h3>
                <div className={styles.sideBar}></div>
            </div>

            {options?.map((post) => (
                <JobsCard img={post.img} title={post.title} text={post.text} num={post.num} />
            ))}
        </div>
    )
}