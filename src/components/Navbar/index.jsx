import styles from "./Navbar.module.css"
import logo from "../../assets/logo.png"

export function Navbar(){
    return(
        <div className={styles.container}>
            <img src={logo} alt="" />

            <div className={styles.elements}>
                <a href="/">Home</a>
                <a href="/Voluntarios">Voluntario</a>
                <a href="#">Vagas</a>
                <a href="#">Entrar</a>
            </div>
        </div>
    )
}