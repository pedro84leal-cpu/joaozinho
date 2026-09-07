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
import tel from '../../images/icones/phone-call.png'



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

        
                    <div className={styles.botaoVivo}>
                        <a className={styles.btVivo} href='https://www.youtube.com/shorts/p3egrWFOXU4' target='_blank' rel='noopener noreferrer'>
                            <div className={styles.arrowContent}>
                                <img src={arrow} className={styles.arrow} alt='logo' />
                            </div>
                            Ver Joãozinho ao vivo
                        </a>
                    </div>
                </div>

                <div className={styles.booking}>
                    <div className={styles.cardBooking}>
                        <div className={styles.titContent}>
                            <h1 className={styles.bokt}>
                                Contactos para shows
                            </h1>
                        </div>
                     
                        <div className={styles.btContet}>
                            <a className={styles.btLigar} href='tel:+351913473859'>
                                Ligar
                            </a>

                            <a className={styles.btEnviar} href='mailto:joaozinho@example.com'>
                                Enviar email
                            </a>
                        </div>
                    </div>
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

                        <a className={styles.btVisitar} href='https://www.facebook.com/Joaozinhoficial' target='_blank' rel='noopener noreferrer'>
                            Visitar
                            <div className={styles.arrow}>                                    
                                <img src={arrowA} className={styles.acont} alt='face' />
                            </div>
                        </a>
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

                        <a className={styles.btSeguir} href='https://www.instagram.com/joaozinhofficial?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==' target='_blank' rel='noopener noreferrer'>
                                Seguir
                            <div className={styles.arrow}>
                                <img src={arrowR} className={styles.acont} alt='seta' />
                            </div>
                        </a>
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

                        <a className={styles.btOuvir} href='https://open.spotify.com/intl-pt/artist/0Eo6rwVviyM68Jo8NBRCBd?si=ZxMTQBjuRH2QJBZpPPfo8A' target='_blank' rel='noopener noreferrer'>
                            Ouvir
                            <div className={styles.arrow}>                                    
                                <img src={arrowV} className={styles.acont} alt='face' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
