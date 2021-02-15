import React from "react"
import Logo from "../../assets/img/Logo.svg"
import styles from "./header.module.scss"
export const Header = () => {
    return(
        <div className={`${styles.header}`}>
            <img src={Logo} alt=""/>
        </div>
    )
}