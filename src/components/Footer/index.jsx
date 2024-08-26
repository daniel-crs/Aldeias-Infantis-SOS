import styles from "./Footer.module.css"

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.contactInfo}>
                <h3>Informações de Contato</h3>
                <p>📞 4003-5339</p>
                <p>📱 (11) 5574-0800</p>
                <p>✉️ faleconosco@aldeiasinfantis.org.br</p>
            </div>

            <div className={styles.help}>
                <h3>Como Ajudar</h3>
                <ul>
                    <li>Torne-se um Amigo SOS</li>
                    <li>Aumente sua Doação</li>
                    <li>Faça uma Doação Única</li>
                    <li>Indique um Amigo</li>
                    <li>Torne-se uma Empresa Amiga SOS</li>
                </ul>
            </div>

            <div className={styles.newsletter}>
                <h3>Assinar Nossa Newsletter</h3>
                <p>Preencha seu e-mail e receba mensalmente um resumo de nossas atividades.</p>
                <input type="email" placeholder="Digite seu e-mail" />
            </div>

            <div className={styles.footerBottom}>
                <p>© Todos os direitos reservados Aldeias Infantis SOS</p>
                <div className={styles.links}>
                    <a href="#">Perguntas Frequentes</a>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Transparência</a>
                </div>
            </div>
        </footer>
    )
}
