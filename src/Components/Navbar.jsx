import styles from './../Styles/Navbar.module.scss'

function Navbar(){
    return (
        <>
            <div className={styles.navbar}>
                <a href="">Home</a>
                <a href="">Accounting</a>
                <a href="">Photos</a>
                <a href="">About</a>
            </div>
        </>
    )
}

export default Navbar;