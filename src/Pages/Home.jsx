import styles from './../Styles/Home.module.scss'
import Navbar from './../Components/Navbar';
import Logo from './../Components/Logo'
import Card from './../Components/Card'
import CardText from './../Arrays/CardText'


export default function Home(){
    return(
        <>
            <Navbar />
            <div className={styles.container}>
                <Logo />
                <div className={styles.cardContainer}>
                    {CardText.map((text) => (
                        <Card text={text} />
                    ))}
                </div>
            </div>
        </>
    )
}