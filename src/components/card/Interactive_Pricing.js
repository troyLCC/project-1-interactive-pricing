import React, {useState, useEffect} from 'react'
import styles from "./Interactive_Pricing.module.css"
import checkMark from "../../images/icon-check.svg"
import Toggle from './Toggle_Button'
const Interactive_Pricing = () => {
   

    const [scaleValue, setScaleValue] = useState(0);
    const [views, setViews] = useState(0);
    const [price, setPrice] = useState(0);
    const [isItOn, setIsItOn] = useState(false)
    useEffect(() => {
        if(isItOn === false){
        if(scaleValue === '0'){
            setViews(0)
            setPrice(0)
        }
       
        if(scaleValue === '20'){
            setViews("10K")
            setPrice(8)
        }
        if(scaleValue === '40'){
            setViews("50K")
            setPrice(12)
        }  
        if(scaleValue === '60'){
            setViews("100K")
            setPrice(16)
        }
        if(scaleValue === '80'){
            setViews("500K")
            setPrice(24)
        }
        if(scaleValue === '100'){
            setViews("1M")
            setPrice(36)
        }
    }else {
        if(scaleValue === '0'){
            setViews(0)
            setPrice(0)
        }
       
        if(scaleValue === '20'){
            setViews("10K")
            setPrice(6)
        }
        if(scaleValue === '40'){
            setViews("50K")
            setPrice(9)
        }  
        if(scaleValue === '60'){
            setViews("100K")
            setPrice(12)
        }
        if(scaleValue === '80'){
            setViews("500K")
            setPrice(18)
        }
        if(scaleValue === '100'){
            setViews("1M")
            setPrice(27)
        }
    }
    },[scaleValue])

    const onChangeHandler = (e) => {
        setScaleValue(e.target.value)
        
    }
    const toogleClickHandler = () => {
        
        if(isItOn === false){
            setIsItOn(true)
        }else {
            setIsItOn(false)
        }
        console.log(isItOn)
    }

    return (
        <div>
            <div className={styles.stat}>
            <p className={styles.views}>{views} PAGEVIEWS</p>
            <div className={styles.price}> <span className={styles.price_span}>${price}</span> <span className={styles.month}> /month</span></div>
            </div>

            <div className={styles.range_width}>
            <input type="range" min="0" max="100" step="20" value={scaleValue}  onChange={onChangeHandler} className = {styles.slider}  />
            </div>
            
            <div className={styles.billing}>
                <p>Monthly Billing</p>
                
                <p>Yearly Billing</p>
                <p><Toggle clickHandler={toogleClickHandler}/> </p>
                <p className={styles.discount}> 25% discount</p>
            </div>
            <hr />
            <div className={styles.perks}>
                <div>
                <ul>
                    <li><img  src={checkMark}/>Unlimited websites</li>
                    <li><img  src={checkMark}/>100% data ownership</li>
                    <li><img  src={checkMark}/>Email reports</li>
                </ul>
                </div>
                <div>
                <button>Start my trail</button>
                </div>
            </div>
            
        </div>
    )
}

export default Interactive_Pricing;
