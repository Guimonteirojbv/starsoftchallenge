import Image from "next/image";

import Elipses from '@/assets/Ellipse.png'
import ProductImage from '@/assets/star.png'
import Trash from '@/assets/trash.svg'

import styles from './styles.module.scss'
import { ProductType } from "@/app/type/itemType";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { addToCart, removeQntd } from "@/Redux/reducers/cart";



export function CartItem({ id,name, price, image, description, quantity}: ProductType) {
    const dispatch = useDispatch<AppDispatch>()
    const items = useSelector((state: RootState) => state.cart.items)

    

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeQntd(id))
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
                            <button onClick={() => handleRemoveFromCart(id)}>-</button>
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