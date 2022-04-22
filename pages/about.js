import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function about(){
    return(
        <div className={styles.about}>
        <h1>Sobre o Projeto</h1>
        <p>O Projeto consiste em um pokedex onde contem todos os pokemons e foi desenvolvido por mim, com base no curso do <span> Matheus Battisti</span></p>
        <Image src='/images/gengar.png' width="400" height="400" alt='Gengar é meu pokemon favorito'/>
        </div>
    )
}