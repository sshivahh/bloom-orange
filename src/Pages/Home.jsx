import Navbar from './../Components/Navbar';
import Logo from './../Components/Logo'
import styles from './../Styles/Home.module.scss'

export default function Home(){
    return(
        <>
            <Navbar />
            <div className={styles.container}>
                <Logo />
            </div>
        </>
    )
}