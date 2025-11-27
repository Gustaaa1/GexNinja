import { useState } from 'react'
import { ContainerHamburguer, MenuHamburguer } from './styles'

const Hamburguer = () => {
    const [open, setOpen] = useState(false)
    return (
        <ContainerHamburguer>
            <MenuHamburguer>
                <button
                    className={`hamburger ${open ? 'open' : ''}`}
                    aria-label="Abrir menu"
                    aria-expanded={open}
                    onClick={() => setOpen(prev => !prev)}>

                    <span />
                    <span />
                    <span />
                </button>

                <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
                    <ul>
                        <li><a href="/">inicio</a></li>
                        <li><a href="/modelos">Modelos</a></li>
                        <li><a href="/detalhe">Sobre</a></li>
                        <li><a href="/contatos">contatos</a></li>
                    </ul>
                </nav>
            </MenuHamburguer>
        </ContainerHamburguer>
    )
}

export default Hamburguer