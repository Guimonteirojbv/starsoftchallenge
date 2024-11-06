'use client'

import Image from "next/image";
import { CartItem } from "../CartItem";

import Elipse from '@/assets/Ellipse.png'
import ArrowLeft from '@/assets/ArrowLeft.svg'

import styles from './styles.module.scss'

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { selectTotal } from "@/features/cart/cartSelectors";

import { ProductType } from "@/app/type/itemType";

import { useRouter } from 'next/navigation'

export function Cart() {
    const cartItems: ProductType[] = useSelector((state: RootState) => state.cart.items)
    const total = useSelector(selectTotal)

    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }



    return (
        <div className={styles.cartWrapper}>

            <div className={styles.modalHeader}>
                <button className={styles.buttonBack} onClick={handleBack}>
                    <Image src={ArrowLeft.src} width={40} height={40} alt=""/>
                </button>
                <span >Mochila de Compras</span>
            </div>
          
                <div className={styles.wrapperItens}>
                    {cartItems && (
                        cartItems.map(item => 
                            <CartItem {...item} key={item.id}/>
                        )
                    )}
                </div>
            

            <div className={styles.wrapperTotal}>
                <span>TOTAL</span>
                <div>
                    <Image src={Elipse.src} width={40} height={40} alt=""/>
                    <span>{total} ETH</span>
                </div>
            </div>

            <button className={styles.btnFinishBuy}>
                FINALIZAR COMPRA
            </button>
        </div>


    )
}