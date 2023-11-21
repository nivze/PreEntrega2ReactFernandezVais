import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./card.module.scss";

const Card = ({producto}) => {
  return (
    <Link to={`/item/${producto.id}`} className={styles.noDecoration}>
        <div className={styles.tarjeta}>
            <h4>{producto.title}</h4>
            <img src={producto.img} alt={producto.title} width={280} height={450} />
            <button className={styles.botonVerDetalle}>Ver detalle</button>
            <p>${producto.price}</p>
        </div>
    </Link>
    
  )
}

export default Card