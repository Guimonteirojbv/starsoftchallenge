
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { AppDispatch, RootState } from '@/Redux/store'
import { Card } from '@/Components/Card'
import { fetchData } from '@/Redux/reducers/products'


export function ProducsList() {
    const {products, page} = useSelector((state: RootState) => state.products)
    const dispatch = useDispatch<AppDispatch>()


    const handleLoadMoreProducts = () => {
        const scrollPositionCurrent = window.scrollY;

        dispatch(fetchData(page)).then(() => {
            window.scrollTo({top: scrollPositionCurrent, behavior: 'smooth'})
        })
    }
    return (
        <>
        <section className={styles.showcase}>

        {products.map(product => (
          <Card data={product} key={product.id}/>
        ))}

         </section>

        <div className={styles.wrapperBtnLoad}>
        <div className={styles.loading}></div>
        <button className={styles.load} onClick={handleLoadMoreProducts} >Carregar mais</button>
        </div>
        </>
    )
}