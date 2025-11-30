import { ContainerHeader, MainHeader } from './styles'
import MotoLogo from '../../assets/logo/Logo_GEx-removebg-preview.png'
import Roda from '../../assets/imgs/Rodamotoo.png'


import MenuHamburguer from '../../Components/Hamburguer'

const Header = () => {
    return (

        <ContainerHeader>
            <MenuHamburguer />
            <MainHeader>

                <img width={100} src={MotoLogo} alt="" />
                <img width={27} className='Roda' src={Roda} alt="" />
                <h1>GexNinja</h1>

                <ul>
                    <a href="#Inicio"><li>Inicio</li></a>
                    <a href="#Modelos"><li>Modelos</li></a>
                    <a href="#Detalhes"><li>Sobre</li></a>
                    <a href="https://w.app/0wucrw"><li>Contato</li></a>
                </ul>

                <a href="https://w.app/0wucrw"> <button>
                    Agende Test Drive
                </button>
                </a>

            </MainHeader>
        </ContainerHeader>
    )
}

export default Header