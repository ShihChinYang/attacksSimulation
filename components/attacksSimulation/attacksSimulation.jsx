import React, {useEffect, useState} from "react";
import styles from "./attacksSimulation.module.css"
import Typed from "react-typed"

export default function AttacksSimulation() {
    const maxPoints = 7;
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
            top : 20 + Math.floor(Math.random() * 60),
            left : 20 + Math.floor(Math.random() * 60),
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
        let top = 20 + Math.floor(Math.random() * 60);
        let left = 20 + Math.floor(Math.random() * 60);
        let animate = true;
        let level = levels[i%3];
        let point = {top: top, left: left, animate: animate, level: level};
        points.push(point);
    }
    
    useEffect(() => {
        setAttacks(points);
    }, [flag])


    return (
        <div className={styles.imageContainer}>
            <img className={styles.mapImage} src="https://cdn.pixabay.com/photo/2015/11/06/10/08/map-1025845_960_720.jpg" alt="World Map" />
            <div className={styles.worldMap}>
            {
                attacks.map((p, i) => {
                    
                      return  (
                          <div id={i} key={i} className={styles.attack + " " + p.level} style={{left: p.left + "%", top: p.top + "%"}} onAnimationIteration={onAnimationIteration} onAnimationEnd={onAnimationEnd} ></div>
                      )
                    
                })
            }
            </div>
            
            
        </div>   
    /*
        <div>
            <div className={styles.worldMap}>
            {
                attacks.map((p, i) => {
                    
                      return  (
                          <div id={i} key={i} className={styles.attack + " " + p.level} style={{left: p.left + "%", top: p.top + "%"}} onAnimationIteration={onAnimationIteration} onAnimationEnd={onAnimationEnd} ></div>
                      )
                    
                })
            }
            </div>
        </div>
    */
    )
}
