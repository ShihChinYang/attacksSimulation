import React, {useEffect, useState} from "react";
import Image from 'next/image'
import styles from "./mapImage.module.css"

export default function MapImage() {


    return (
        <div className={styles.imageContainer}>
            <img className={styles.mapImage} src="https://cdn.pixabay.com/photo/2015/11/06/10/08/map-1025845_960_720.jpg" alt="World Map" />
        </div>
    )

    
}
