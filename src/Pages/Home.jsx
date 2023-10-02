import styles from './../Styles/Home.module.scss'
import Navbar from './../Components/Navbar';
import Logo from './../Components/Logo'
import Card from './../Components/Card'

export default function Home(){
    return(
        <>
            <Navbar />
            <div className={styles.container}>
                <Logo />
                <div className={styles.cardContainer}>
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}