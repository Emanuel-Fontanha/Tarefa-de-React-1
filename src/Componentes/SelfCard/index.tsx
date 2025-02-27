import styles from "./styles.module.css"
import selfPicture from "../../assets/me-picture.jpg"

export default function SelfCard() {
    return (
        <div className={styles.div}>
            <img src={selfPicture} alt="Foto minha" />
            <h1>Emanuel Fontanha</h1>
            <h2>Dev Front-end</h2>
        </div>
    )
}