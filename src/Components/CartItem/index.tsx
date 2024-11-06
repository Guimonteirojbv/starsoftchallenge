import Image from "next/image";

import Elipses from '@/assets/Ellipse.png'
import Trash from '@/assets/trash.svg'

import styles from './styles.module.scss'
import { ProductType } from "@/app/type/itemType";
import { useDispatch  } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { addToCart, removeFromCart, removeQntd } from "@/Redux/reducers/cart";



export function CartItem({ id,name, price, image, description, quantity}: ProductType) {
    const dispatch = useDispatch<AppDispatch>()
   

    const handleRemoveQntd = (id: number) => {
        dispatch(removeQntd(id))
    }

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id))
    }

    const handleAddToCart = (id: number) => {
        dispatch(addToCart(id))
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.wrapperImage}>
                    <Image className={styles.productImage} src={image} width={150} height={150} alt=""/>
                </div>

                <div className={styles.contentItemWrapper}>
                    <h3>{name}</h3>
                    <p>{description}</p>

                    <div className={styles.priceWrapper}>
                        <Image src={Elipses.src} width={30} height={30} alt=""/>
                        <span>{price} ETH</span>
                    </div>

                    <div className={styles.buttonActionsWrapper}>
                        <div className={styles.buttonQntdContainer}>
                            <button onClick={() => handleRemoveQntd(id)}>-</button>
                            <span>{quantity}</span>
                            <button onClick={() => handleAddToCart(id)}>+</button>
                        </div>

                        <button className={styles.buttonTrash} onClick={() => handleRemoveFromCart(id)}>
                            <Image src={Trash.src} width={20} height={20} alt=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}