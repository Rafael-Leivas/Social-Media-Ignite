import styles from './Post.module.css'

export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/rafael-leivas.png" />
                    <div className={styles.authorInfo}>
                        <strong>Rafael leivas</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time>Públicado há 1h</time>
            </header>
        </article>
    )
}