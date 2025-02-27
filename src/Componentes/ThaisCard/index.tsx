import styles from "./styles.module.css"
import Thais from "../../assets/thais.png"
import Comment from "../Comments"
import { useState } from "react"

interface ICommentary {
    textComment: string,
}

export default function ThaisCard() {
    
    const [listComments, setListComments] = useState<ICommentary[]>([])
    const [commentText, setCommentText] = useState("")
    
    function criarComment (text: string) {
        const aux: ICommentary = {
            textComment: text,
        }
        setListComments([aux, ...listComments])
        setCommentText("")
    }

    function commentEraser (index: number) {
        setListComments(listComments.filter((_, item) => item !== index))
    }

    return (
        <div className={styles.card}>
            <div className={styles.divOne}>
                <div className={styles.info}>
                    <img src={Thais} alt="Thaís Gomes" />
                    <div>
                        <h3>Thaís Gomes</h3>
                        <h4>Designer</h4>
                    </div>
                </div>
                <p>Publicado há 1h</p>
            </div>

            <div className={styles.divTwo}>
                <p>Lorem ipsum</p>
                <p>dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. </p>
                <p>Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
            </div>

            <div className={styles.divThree}>
                <h4>Deixe seu feedback</h4>
                <input 
                    type="text" 
                    placeholder="No que você está pensando?..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                    onClick={() => criarComment(commentText)}>
                    Comentar
                </button>
            </div>

            <div className={styles.divFour}>
                {
                    listComments.map((aux, index) => (
                        <Comment
                            key={index}
                            name="Avaliador"
                            photo="src/assets/commentAny.jpg"
                            commentText= {aux.textComment}
                            deleteComment={() => commentEraser(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}