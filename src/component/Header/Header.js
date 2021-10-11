import React from 'react'
import * as styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h1>virtual lollipop</h1>
            <p>because we all know someone</p>
            <p>who deserves some sugar.</p>
        </div>
    )
}

export default Header