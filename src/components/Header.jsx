import styles from './Header.module.css'

import Ignitelogo from '../img/logo-ignite.png'

export function Header(props){
    return( 
        <div className={styles.navbar}>
            <img src={Ignitelogo} />
            <h3 className={styles.nomeLogo}>{props.nome}</h3>
        </div>
    )
}