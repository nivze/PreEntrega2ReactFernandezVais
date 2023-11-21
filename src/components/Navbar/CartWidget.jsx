import styles from "./cartwidget.module.scss";

const CartWidget = () => {
  return (
    <div className={styles.container}>
      <img src="../../../public/img/carritoIcono.svg" alt="Logo de carrito compras" className={styles.carritoIcono} />
      <p>7</p>
    </div>
  )
}

export default CartWidget