

import Logo from '@/assets/logo.svg'
import Bag from '@/assets/Bag.svg'
import Image from 'next/image'

import styles from './styles.module.scss'


export function Header() {
    return (
        <header className={styles.container}>
            <Image src={Logo.src} className={styles.logo} alt="starsoft" width={150} height={100}/>

            <div className={styles.bagWrapper}>
                <Image src={Bag.src} className={styles.bag} alt="bag" width={150} height={100} />
                <span className={styles.countItems}>0</span>
            </div>
        </header>
    )
}