import Detail from '../Detail/Detail.jsx'
import styles from './itemDetailContainer.module.scss'

const ItemDetailContainer = ({productos}) => {
    return (
      <div>
        { productos.map(producto => (
          <Detail key={producto.id} producto={producto} />
        ))}
      </div>
    )
  }
    
  

export default ItemDetailContainer