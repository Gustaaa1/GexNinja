import { ContainerHome, MainHome, Modelos, FooterHome } from './styles'
import Header from '../../Components/Header'

import ninja400 from '../../assets/imgs/ninja-400.jpg'
import Ninja650 from '../../assets/imgs/ninja-650.jpg'
import NInjaZX from '../../assets/imgs/ninja-zx10r.jpg'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    }, []);

    return (
        <ContainerHome>
            <Header />

            <MainHome id='Inicio'>

                <div className='AltaPeformace'>Alta Performace</div>

                <h2>
                    A Velocidade
                    <div className='Dna'> No Seu DNA </div>
                </h2>

                <p>
                    Descubra a linha completa de motos Kawasaki Ninja. <br />
                    Performance extrema, design agressivo e tecnologia de <br />
                    ponta.
                </p>

                <a href="#Modelos">
                    <button className='Modelos'>Ver Modelos</button>
                </a>

                <a href="https://w.app/0wucrw">
                    <button className='Conosco'>Fale Conosco</button>
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

                    <p>
                        Explore a linha completa de motos Ninja. Cada modelo projetado para <br />
                        oferecer uma experiência única de pilotagem.
                    </p>

                    <div data-aos="fade-up" className='Valores'>
                        <div data-aos="fade-up" className='ValorPrime'><h5>R$ 32.990</h5></div>
                        <div data-aos="fade-up" className='ValorGex'><h5>R$ 44.990</h5></div>
                        <div data-aos="fade-up" className='ValorRed'><h5>R$ 89.990</h5></div>
                    </div>

                    <div className='Flex'>

                        {/* CARD — NINJA 400 */}
                        <div data-aos="fade-up" className='MotoNinjaPrime'>
                            <img src={ninja400} alt="" />
                            <h2>Ninja 400</h2>
                            <p>Perfeita para iniciantes com espirito esportivo</p>
                            <div className="lista-especificacoes">
                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRaio} alt="" /> */}
                                    <span className="label">Potência:</span>
                                    <span className="value">49 HP</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRelogio} alt="" /> */}
                                    <span className="label">Cilindrada:</span>
                                    <span className="value">399 CC</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconEscudo} alt="" /> */}
                                    <span className="label">Peso:</span>
                                    <span className="value">168 KG</span>
                                </div>
                            </div>
                            <a href="https://w.app/0wucrw"><button>Saiba Mais</button></a>
                        </div>

                        {/* CARD — NINJA 650 */}
                        <div data-aos="fade-up" className='MotoNinjaGex'>
                            <img src={Ninja650} alt="" />
                            <h2>Ninja 650</h2>
                            <p>Equilibrio perfeito entre performance e conforto</p>
                            <div className="lista-especificacoes">
                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRaio} alt="" /> */}
                                    <span className="label">Potência:</span>
                                    <span className="value">68 HP</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRelogio} alt="" /> */}
                                    <span className="label">Cilindrada:</span>
                                    <span className="value">649 CC</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconEscudo} alt="" /> */}
                                    <span className="label">Peso:</span>
                                    <span className="value">193 KG</span>
                                </div>
                            </div>
                            <a href="https://w.app/0wucrw"><button>Saiba Mais</button></a>
                        </div>

                        {/* CARD — NINJA ZX-10 */}
                        <div data-aos="fade-up" className='MotoNinjaRed'>
                            <img src={NInjaZX} alt="" />
                            <h2>Ninja ZX-10</h2>
                            <p>
                                Superbike de alta performance para os mais exigentes
                            </p>
                            <div className="lista-especificacoes">
                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRaio} alt="" /> */}
                                    <span className="label">Potência:</span>
                                    <span className="value">203 HP</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconRelogio} alt="" /> */}
                                    <span className="label">Cilindrada:</span>
                                    <span className="value">999 CC</span>
                                </div>

                                <div className="item-especificacao">
                                    {/* <img width="25px" src={IconEscudo} alt="" /> */}
                                    <span className="label">Peso:</span>
                                    <span className="value">207 KG</span>
                                </div>
                            </div>
                            <a href="https://w.app/0wucrw"><button>Saiba Mais</button></a>
                        </div>

                    </div>
                </Modelos>

                <FooterHome id='Detalhes'>
                    <h1>
                        Por Que Escolher
                        <div className='Kawazaki'>KawazakiNinja</div>
                    </h1>

                    <p>
                        Mais do que uma loja, somos especialistas em motos Ninja com <br />
                        compromisso total com sua satisfação
                    </p>

                    <div className='Acelerar'>
                        <h4>Pronto Para Acelerar?</h4>
                        <p>Agende um test drive e sinta a emoção de pilotar uma verdadeira Ninja.</p>
                        <button>Agendar Test Drive Agora</button>
                    </div>

                </FooterHome>

            </MainHome>
        </ContainerHome>
    )
}

export default Home
