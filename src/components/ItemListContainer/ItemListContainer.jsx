import { Link, useParams } from "react-router-dom";
import styles from "./itemlistcontainer.module.scss";
import Card from "../Card/Card.jsx"

const ItemListContainer = ({productos}) => {
  const {id} = useParams();

  if(id === undefined){
    return (
      <div className={styles.container}>
        { productos.map(producto => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }else{
    return (
      <div className={styles.container}>
        { productos.filter(producto => producto.category == id).map(producto => (
          <Card key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }
}

export default ItemListContainer