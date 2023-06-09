import {format, formatDistanceToNow} from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { pt, ptBR } from 'date-fns/locale'
import { Link } from 'phosphor-react'

export function Post({ author, publishedAt, content }){
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",)

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString('2023-04-11')}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if  (line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type == Link){
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}