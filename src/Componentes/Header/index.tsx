import styles from "./styles.module.css"
import logo from "../../assets/logo.jpg"

export default function Header () {
    return (
        <header className={styles.header}>
            <img src={logo} alt="" />
            <h1>Feed</h1>
        </header>
    )
}