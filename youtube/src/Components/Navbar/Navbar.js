import React, { useState } from 'react'
import './Navbar.css'
import { WhiteLogo, Avatar } from '../../Assets/ImageIndex'


const Navbar = () => {
    const [isDarkTheme, setisDarkTheme] = useState(true)
    const [openNav, setOpenNav] = useState(true)
    const [search, setSearch] = useState("")

    const handleSidebar = () => {
        const sidebarContainer = document.getElementById('sidebarContainer');
        const homeContainer = document.getElementById('homeContainer');
        homeContainer.classList.toggle('changePadding')
        sidebarContainer.classList.toggle('close')
    }

    const handleThemes = () => {
        const rootElement = document.getElementById('root');
        rootElement.classList.toggle('dark-theme')
        setisDarkTheme(!isDarkTheme)
    }

    return (
        <>
            <header>
                <div className='headerDiv'>
                    <div>
                        <div className='humburger'>
                            <div onClick={handleSidebar}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <img src={WhiteLogo} alt='Youtube Logo' title='Youtube' />
                    </div>
                    <div className='searchContainer'>
                        <div className='searchBox'>
                            <input type='text' placeholder='Pesquisar' value={search} onChange={(e) => setSearch(e.target.value)} />
                            {search !== "" && <span className='material-symbols-rounded' onClick={() => setSearch("")}>
                                close
                            </span>}
                        </div>
                        <div className='searchButton'>
                            <span className='material-symbols-rounded'>
                                search
                            </span>
                        </div>
                        <div className='searchMic'>
                            <span className='material-symbols-rounded active'>
                                mic
                            </span>
                        </div>
                    </div>
                    <div className='profileContainer'>
                        <span className='material-symbols-rounded'>
                            add_box
                        </span>
                        <span className='material-symbols-rounded'>
                            notifications
                        </span>
                        <img src={Avatar} alt='Seu Avatar' title='TransforMEI' className='avatar' onClick={() => setOpenNav(!openNav)} />
                    </div>
                </div>
                {openNav && <div className='profileBtns'>
                    <div className='avatarInfo profileTab'>
                        <img src={Avatar} alt='Seu avatar' title='Avatar' />
                        <p>TransforMEI</p>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='profileTabs'>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>account_box</span>
                            <p>Seu canal</p>
                        </div>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>play_circle</span>
                            <p>Youtube Studio</p>
                        </div>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>switch_account</span>
                            <p>Alterar conta</p>
                        </div>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>logout</span>
                            <p>Sair</p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='profileTabs'>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>monetization_on</span>
                            <p>Compras e assinaturas</p>
                        </div>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>shield</span>
                            <p>Seus dados no Youtube</p>
                        </div>
                    </div>
                    <div className='horizontalLine'></div>
                    <div className='profileTabs'>
                        {isDarkTheme && <div className='profileTab' onClick={handleThemes}>
                            <span className='material-symbols-rounded'>light_mode</span>
                            <p>Tema Claro</p>
                            {/* Ainda falta a setinha na direita */}
                        </div>}
                        {!isDarkTheme && <div className='profileTab'  onClick={handleThemes}>
                            <span className='material-symbols-rounded'>dark_mode</span>
                            <p>Tema Escuro</p>
                            {/* Ainda falta a setinha na direita */}
                        </div>}
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>language</span>
                            <p>Local: Brasil</p>
                            {/* Ainda falta a setinha na direita */}
                        </div>
                    </div>
                    <div className='horizontalLine'>
                    </div>
                    <div className='profileTab'>
                        <span className='material-symbols-rounded'>settings</span>
                        <p>Configurações</p>
                        {/* Ainda falta a setinha na direita */}
                    </div>
                    <div className='horizontalLine'>
                    </div>
                    <div className='profileTabs'>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>help</span>
                            <p>Ajuda</p>
                            {/* Ainda falta a setinha na direita */}
                        </div>
                        <div className='profileTab'>
                            <span className='material-symbols-rounded'>sms_failed</span>
                            <p>Enviar feedback</p>
                            {/* Ainda falta a setinha na direita */}
                        </div>
                    </div>
                </div>}
            </header>
        </>
    )
}

export default Navbar