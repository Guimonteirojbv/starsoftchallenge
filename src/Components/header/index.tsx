'use client'

import Logo from '@/assets/logo.svg'
import Bag from '@/assets/Bag.svg'
import Image from 'next/image'

import styles from './styles.module.scss'
import { Cart } from '../Cart'
import { useSelector } from 'react-redux'
import { RootState } from '@/Redux/store'


export function Header() {
    const totalItems = useSelector((state: RootState) => state.cart.items.length)
    return (
        <header className={styles.container}>
            <Image src={Logo.src} className={styles.logo} alt="starsoft" width={150} height={100}/>

            <div className={styles.bagWrapper}>

                <button className={styles.buttonBag}>
                    <Image src={Bag.src} className={styles.bag} alt="bag" width={150} height={100} />
                </button>

             
                
                <span className={styles.countItems}>{totalItems}</span>
            </div>
        </header>
    )
}