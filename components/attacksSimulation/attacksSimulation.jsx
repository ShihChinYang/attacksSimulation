import React, {useEffect, useState} from "react";
import styles from "./attacksSimulation.module.css"

export default function AttacksSimulation() {
    const maxPoints = 7;
    const levels = [styles.explosionSmall, styles.explosionMedian, styles.explosionLarge];

    const startStopAnimation = () => {
        console.log("Hello");
        setAnimate(!animate);
    }

    const onAnimationStart = (e) => {
        console.log("Started", e.target.id);
    }

    const onAnimationEnd = (e) => {
        console.log("Ended", e.target.id);
    }

    const points = [];
    for(let i=0; i< maxPoints; i++){
        let top = 10 + Math.floor(Math.random() * 80);
        let left = 10 + Math.floor(Math.random() * 80);
        let delay = i%3;
        let level = levels[i%3];
        let point = {top: top, left: left, delay: delay, level: level};
        points.push(point);
    }
    
    const [attacks, setAttacks] = useState([]);

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAttacks(points);
    }, [])


    return (
        <div>
            <button onClick={startStopAnimation}>
                Start/Stop the animation
            </button>
            <div id="attack_1" className={animate?styles.attack+" "+ styles.explode:styles.attack}
                onAnimationStart={onAnimationStart} onAnimationEnd={onAnimationEnd}> 
            
            </div>
            <div>
            {
                attacks.map((p, i) => {
                    
                      return  (
                          <div id={i} key={i} className={styles.attack + " " + p.level} style={{left: p.left + "%", top: p.top + "%"}} onAnimationEnd={onAnimationEnd} ></div>
                      )
                    
                })
            }
            </div>
        </div>
    )
}
