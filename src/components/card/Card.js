import React from 'react'
import styles from './Card.module.css'
const Card = (props) => {
    return (
        <div >
           
            <div className={styles.card}>
            {props.children}
            </div>
            
            
        </div>
    )
}

export default Card
