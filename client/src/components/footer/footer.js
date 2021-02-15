import React from "react"
import Logo from "../../assets/img/Logo.svg"
import styles from "./footer.module.scss"
export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <a href="/">
                <img src={Logo} alt="" />
            </a>

            <p>All rights reserved by ThemeTags</p>

            <p>Copyrights © 2019. </p>
        </footer>
    )
}