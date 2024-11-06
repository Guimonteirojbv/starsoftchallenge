

import Image from 'next/image'
import styles from './styles.module.scss'


import Elipsis from '@/assets/Ellipse.png'

import { ProductType } from '@/app/type/itemType'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/Redux/store'
import { addToCart } from '@/Redux/reducers/cart'


interface ICard {
    data: ProductType
}

export function Card({data}: ICard) {
    const dispatch = useDispatch<AppDispatch>()

    const handleAddToCart = (item: ProductType) => {
        dispatch(addToCart(item))
    }

    
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageWrapper}>
                <Image src={data.image} width={300} height={300} alt=''/>
            </div>
            <h2 className={styles.title}>{data.name}</h2>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.priceWrapper}>
            <Image src={Elipsis.src} width={35} height={35} alt=''/>
            <span>{data.price} ETH</span>
            </div>
            <button className={styles.buttonBuy} onClick={() => handleAddToCart(data)}>COMPRAR</button>
        </div>
    )
}