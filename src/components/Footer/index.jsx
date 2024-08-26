import styles from "./Footer.module.css"

import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
    const helpOptions = [
        { text: "Torne-se um Amigo SOS" },
        { text: "Aumente sua Doação" },
        { text: "Faça uma Doação Única" },
        { text: "Indique um Amigo" },
        { text: "Torne-se uma Empresa Amiga SOS" }
    ]

    return (
        <footer className={styles.container}>
            <div className={styles.firstElement}>
                <div className={styles.infoAndContact}>
                    <div className={styles.infoAndHelp}>
                        <div className={styles.info}>
                            <h3>Informações de Contato</h3>
                            <div className={styles.infoElements}>
                                <div className={styles.infoIconsContainer}>
                                    <FaPhone className={styles.infoIcons} />
                                    <p>4003-5339</p>
                                </div>
                                <div className={styles.infoIconsContainer}>
                                    <FaWhatsapp className={styles.infoIcons} />
                                    <p>11 5574-0800</p>
                                </div>
                                <div className={styles.infoIconsContainer}>
                                    <MdEmail className={styles.infoIcons} />
                                    <p>faleconosco@aldeiasinfantis.org.br</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.help}>
                            <h3>Como Ajudar</h3>
                            <div className={styles.helpElements}>
                                <div className={styles.helpIconsContainer}>
                                    <FaArrowRight />
                                    <p>Torne-se um Amigo SOS</p>
                                </div>
                                <div className={styles.helpIconsContainer}>
                                    <FaArrowRight />
                                    <p>Aumente sua Doação</p>
                                </div>
                                <div className={styles.helpIconsContainer}>
                                    <FaArrowRight />
                                    <p>Faça uma Doação Única</p>
                                </div>
                                <div className={styles.helpIconsContainer}>
                                    <FaArrowRight />
                                    <p>Indique um Amigo</p>
                                </div>
                                <div className={styles.helpIconsContainer}>
                                    <FaArrowRight />
                                    <p>Torne-se uma Empresa Amiga SOS</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.icons}>
                        <FaFacebookSquare  />
                        <FaLinkedin />
                        <TfiYoutube />
                        <AiFillInstagram />
                    </div>
                </div>

                <div className={styles.cnpj}>
                    <div className={styles.cnpjText}>
                        <p>
                            <strong>Aldeias Infantis SOS Brasil</strong>, escrita no CNPJ sob o 
                            <strong>nº 35.797.364/0001-29</strong>, é uma associação sem fins lucrativos 
                            que, nos termos da legislação tributária brasileira, goza de isenção com 
                            relação aos atributos federais devidos sobre suas receitas próprias.
                        </p>
                    </div>

                    <div className={styles.emailArea}>
                        <h3>Assinar Nossa Newlesster</h3>
                        <p>Preencha seu e-mail e receba mensalmente um resumo de nossas atividades.</p>
                        <div className={styles.emailForm}>
                            <p>Digite seu email</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.secondElement}>
                <div className={styles.copyright}>
                    <p className={styles.copyrightColor}>Todos os direitos reservados</p>
                    <p><strong>Aldeias Infantis SOS</strong></p>
                </div>

                <div className={styles.menuElements}>
                    <a href="#">Perguntas Frequentes</a>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Transparência</a>
                </div>
            </div>
        </footer>
    )
}
