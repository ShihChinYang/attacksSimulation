import React, {useEffect, useState} from "react";
import styles from "./attacksSimulation.module.css"

export default function AttacksSimulation() {
    const maxPoints = 15;
    const levels = [styles.explosionSmall, styles.explosionMedian, styles.explosionLarge];

    const [attacks, setAttacks] = useState([]);
    const [animate, setAnimate] = useState(false);
    const [flag, setFlag] = useState(true);

    const startStopAnimation = () => {
        console.log("Hello");
        setAnimate(!animate);
    }
    const onAnimationIteration = (e) => {   
        console.log("Again", e.target.id);
        let attacksCopy = [...attacks];
        attacksCopy[e.target.id]={
            top : 10 + Math.floor(Math.random() * 80),
            left : 10 + Math.floor(Math.random() * 80),
            level : levels[e.target.id%3] }
        setAttacks(attacksCopy);       
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
        let animate = true;
        let level = levels[i%3];
        let point = {top: top, left: left, animate: animate, level: level};
        points.push(point);
    }
    
    useEffect(() => {
        setAttacks(points);
    }, [flag])


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
                          <div id={i} key={i} className={styles.attack + " " + p.level} style={{left: p.left + "%", top: p.top + "%"}} onAnimationIteration={onAnimationIteration} onAnimationEnd={onAnimationEnd} ></div>
                      )
                    
                })
            }
            </div>
        </div>
    )
}
