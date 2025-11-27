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
                    <li>Inicio</li>
                    <li>Modelos</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>

                <button>
                    Agende Test Drive
                </button>

            </MainHeader>
        </ContainerHeader>
    )
}

export default Header