import styles from "./../Styles/Card.module.scss"

function Card(props){
    return(
        <div className={styles.card}>
            <h1 className={styles.text}>{props.text}</h1>
        </div>
    )
}

export default Card;