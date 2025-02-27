import style from "./styles.module.css"
import deleteButton from "../../assets/delete-button.png"
import LikeButton from "../LikeButton";

interface ICommentary {
    name: string;
    photo: string;
    commentText: string;

    deleteComment: () => void;
}

export default function Comments ({name, photo, commentText, deleteComment}: ICommentary) {
    
    return (
        <div className={style.container}>
            <img className={style.profilePic} src={photo} alt="" />

            <div className={style.comment}>
                <div>
                    <div className={style.info}>
                        <div>
                            <h4>{name}</h4>
                            <p className={style.tempoPublicado}>Cerca de 2h</p>

                        </div>
                        <button 
                            className={style.deleteButton}
                            onClick={() => deleteComment()}>
                            <img src={deleteButton} alt="Delete" />
                        </button>

                    </div>
                    <p className={style.text}>{commentText}</p>

                </div>

                <LikeButton/>
            </div>
        </div>
    )
}