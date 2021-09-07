import React, {useState} from 'react'
import styles from "./Toggle_Button.module.css"

const Toggle_Button = (props) => {
    const [isItOn, setIsItOn] = useState(false)
    
    return (
        <label className={styles.switch}>
        <input type='checkbox' onChange={props.clickHandler} />
        <span className= {`${styles.slider} ${styles.round}`}></span>
      </label>
    )
}

export default Toggle_Button
