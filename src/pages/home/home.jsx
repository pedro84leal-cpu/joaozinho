import styles from '../home/home.module.css'
import fundo from '../../images/fundo2.png'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import arrow from '../../images/icones/arrow.png'
import face from '../../images/icones/face.png'
import insta from '../../images/icones/instagram.png'
import spot from '../../images/icones/spotify.png'
import email from '../../images/icones/email.png'
import arrowA from '../../images/icones/arrow drt.png'
import arrowR from '../../images/icones/rosa.png'
import arrowV from '../../images/icones/verde.png'



export default function Home(){

    return(

        <>
        <div className={styles.container}>
            <div className={styles.fundo}>
                <img src={fundo} alt='fundo' className={styles.fundoImg} />
                <div className={styles.fumeOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <img src={logo} className={styles.logo} alt='logo' />
                </div>

                <div className={styles.descricao}>
                    <h1 className={styles.titulo}>
                        Música Popular 
                        <p className={styles.port}>Portuguesa</p>
                    </h1>

                    <p className={styles.slogam}>
                        Tradição, alegria e paixão
                    </p>

                    <div className={styles.spotifyContent}>
                        <Link className={styles.spotify} >
                            <h1 className={styles.ouvir}>
                                <div className={styles.arrowContent}>
                                    <img src={arrow} className={styles.arrow} alt='logo' />
                                </div>
                                    Ver agora
                            </h1>
                        </Link>
                    </div>
                </div>

                <div className={styles.contato}>
                    <div className={styles.contatoContent}>
                        <h1 className={styles.contTit}>
                            Para concertos e contatos
                        </h1>
                    </div>

                    <Link className={styles.spotify} >
                        <h1 className={styles.enviar}>
                            <div className={styles.arrowContent}>
                                <img src={email} className={styles.arrow} alt='logo' />
                            </div>
                                Enviar
                        </h1>
                    </Link>
                </div>


                    
                <div className={styles.cards}>

                    <div className={styles.card1}>
                        <div className={styles.redesLogo}>
                            <img src={face} className={styles.rdLogo} alt='face' />
                        </div>

                        <h1 className={styles.faceTit}>
                            Facebook
                        </h1>

                        <p className={styles.notas}>
                             Acompanha as novidades
                        </p>

                        <Link className={styles.btVisitar}>
                            Visitar
                            <div className={styles.arrow}>                                    
                                <img src={arrowA} className={styles.acont} alt='face' />
                            </div>
                        </Link>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.redesLogo}>
                            <img src={insta} className={styles.rdLogo} alt='face' />
                        </div>

                        <h1 className={styles.faceTit}>
                            Instagram
                        </h1>

                        <p className={styles.notas}>
                            Bastidores e momentos únicos
                        </p>

                        <Link className={styles.btSeguir}>
                            Seguir
                            <div className={styles.arrow}>                                    
                                <img src={arrowR} className={styles.acont} alt='face' />
                            </div>
                        </Link>
                    </div>

                    <div className={styles.card1}>
                        <div className={styles.redesLogo}>
                            <img src={spot} className={styles.rdLogo} alt='face' />
                        </div>

                        <h1 className={styles.faceTit}>
                            Spotify
                        </h1>

                        <p className={styles.notas}>
                             Ouça as minhas musicas
                        </p>

                        <Link className={styles.btOuvir}>
                            Ouvir
                            <div className={styles.arrow}>                                    
                                <img src={arrowV} className={styles.acont} alt='face' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
