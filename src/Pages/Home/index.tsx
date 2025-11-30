import { ContainerHome, MainHome, Modelos, FooterHome } from './styles'
import Header from '../../Components/Header'
import ninja400 from '../../assets/imgs/ninja-400.jpg'
import Ninja650 from '../../assets/imgs/ninja-650.jpg'
import NInjaZX from '../../assets/imgs/ninja-zx10r.jpg'

const Home = () => {
    return (
        <ContainerHome>
            <Header />
            <MainHome id='Inicio'>
                <div className='AltaPeformace'>Alta Peformace</div>
                <h2>
                    A Velocidade
                    <div className='Dna'> No Seu DNA </div>
                </h2>

                <p>Descubra a linha completa de motos Kawasaki Ninja. <br />
                    Performance extrema, design agressivo e tecnologia de <br />
                    ponta.</p>

                <button className='Modelos'>
                    Ver Modelos
                </button>

                <a href="https://w.app/0wucrw"><button className='Conosco'>
                    Fale Conosco
                </button>
                </a>
                <div className='subinfo'>
                    <h3>200+</h3>
                    <h3 className='Porcento'>98%</h3>
                    <h3>15+</h3>
                </div>

                <div className='subinfop'>
                    <p>Motos Vendidas</p>
                    <p className='Cliente'>Clientes Satisfeitos</p>
                    <p>Anos de experiênçia</p>
                </div>

                <Modelos id='Modelos'>
                    <h1>
                        Nossos
                        <div className='Modelos'>Modelos</div>
                    </h1>

                    <p>Explore a linha completa de motos Ninja. Cada modelo projetado para <br />
                        oferecer uma experiência única de pilotagem.</p>
                    <div className='Flex'>
                        <div className='MotoNinjaPrime'>
                            <img src={ninja400} alt="" />
                            <h2>Ninja 400</h2>
                            <p>Perfeita para iniciantes com espirito esportivo</p>
                            <a href="https://w.app/0wucrw"><button>Saiba Mais</button></a>
                        </div>

                        <div className='MotoNinjaGex'>
                            <img src={Ninja650} alt="" />
                            <h2>Ninja 650</h2>
                            <p>Equilibrio perfeito entre performance e conforto</p>
                            <a href="https://w.app/0wucrw"><button>Saiba Mais</button></a>
                        </div>

                        <div className='MotoNinjaRed'>
                            <img src={NInjaZX} alt="" />
                            <h2>Ninja ZX-10</h2>
                            <p>Superbike de alta performance para os mais <br /> exigentes</p>
                            <a href="https://w.app/0wucrw"> <button>Saiba Mais</button></a>
                        </div>
                    </div>
                </Modelos>

                <FooterHome id='Detalhes'>
                    <h1>
                        Por Que Escolher
                        <div className='Kawazaki'>Kawazakininja</div>
                    </h1>
                    <p>Mais do que uma loja, somos especialistas em motos Ninja com <br />
                        compromisso total com sua satisfacao</p>
                </FooterHome>

            </MainHome>

        </ContainerHome>
    )
}

export default Home