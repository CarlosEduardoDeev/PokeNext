import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'


export default function Card({pokemon}){
    return(
        <div className={styles.card}>
            
            
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width="200"
            height="200"
            alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <Link href={`/pokemon/${pokemon.id}`}>
            <a className={styles.btn}>Detalhes</a>
            </Link>
        </div>
    )
}