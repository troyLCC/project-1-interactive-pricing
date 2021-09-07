import React from 'react'
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header_container}>
            <h1 className={styles.header}>
                Simple, traffic-based pricing
            </h1>
            <p className={styles.paragraph}>
                Sign-up for our 30-day trail. No credit card required. 
            </p>
        </div>
    )
}

export default Header
