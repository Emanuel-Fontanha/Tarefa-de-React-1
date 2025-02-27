import styles from "./styles.module.css"
import Ricardo from "../../assets/ricardo.png"
import Comment from "../Comments"
import { useState } from "react"

interface ICommentary {
    name: string,
    photo: string,
    textComment: string,
}

export default function RicardoCard () {
    
    const [commentText, setCommentText] = useState("")
    const [listComments, setListComments] = useState<ICommentary[]>([
        {
            name: "Felyppe Nunes",
            photo: "src/assets/comment01.png",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        },
        {
            name: "Mellany Carter",
            photo: "src/assets/comment02.png",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        },
        {
            name: "Jessy Logan",
            photo: "src/assets/comment03.png",
            textComment: "Est aspernatur quis eos natus dicta et internos",
        }
    ])
    
    function criarComment (text: string) {
        const aux: ICommentary = {
            name: "Avaliador",
            photo: "src/assets/commentAny.jpg",
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
                    <img src={Ricardo} alt="Ricardo Siqueira" />
                    <div>
                        <h3>Ricardo Siqueira</h3>
                        <h4>Dev Back-end</h4>
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
                            name= {aux.name} 
                            photo= {aux.photo} 
                            commentText= {aux.textComment}
                            deleteComment={() => commentEraser(index)}
                        />
                    ))
                }
            </div>
        </div>
    )
}