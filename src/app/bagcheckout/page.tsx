import { Header } from "@/Components/Header";


import styles from './styles.module.scss'
import { Cart } from "@/Components/Cart";


export default function BagCheckout() {
 

    return (
        
            <>
                <Header />

               <section className={styles.bagContainer}>
                <Cart />
               </section>
            </>
            
        
    )
}