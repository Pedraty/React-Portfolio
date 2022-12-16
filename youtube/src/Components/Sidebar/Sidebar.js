// import { tab } from '@testing-library/user-event/dist/tab'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const [selectedId, setSelectedId] = useState("home")

    const sideBarData = {
        mainTabs: [
            {
                head: "Home",
                icon: "home"
            },
            {
                head: "Explorar",
                icon: "explore"
            },
            {
                head: "Shorts",
                icon: "bolt"
            },
            {
                head: "Inscrições",
                icon: "subscriptions"
            },
        ],
        externalTabs: [
            {
                head: "Biblioteca",
                icon: "video_library"
            },
            {
                head: "Histórico",
                icon: "history"
            },
            {
                head: "Seus Vídeos",
                icon: "smart_display"
            },
            {
                head: "Assistir mais tarde",
                icon: "browse_gallery"
            },
            {
                head: "Marcados com Gostei",
                icon: "thumb_up_off"
            },
        ],
        channels: [
            {
                "logo": "https://yt3.ggpht.com/3ExBTfKDRd_XTY3WI-rr2_lY5itmJRZqtcjfXeDS76i-w5B_GLvsg3mVnqj-5mg4ltwGtwzgsA=s88-c-k-c0x00ffffff-no-rj",
                "name": "Menos é Mais",
                id: 'MenosEhMais'
            },
            {
                "logo": "https://yt3.ggpht.com/t6JjeitQyjCJ45G7MosiFRBBJPFKg66C99tYxw0FYig56lTstgtimaStIL3Kfr2Hndsm9U9i9w=s48-c-k-c0x00ffffff-no-nd-rj",
                "name": "Grupo Pixote",
                id: 'GrupoPixote'
            },
            {
                "logo": "https://yt3.ggpht.com/b4yaXbqC5lOxw3Ov2wmqHHoQ4OFGkJyuPu-YOnwJkAzwjMvf1hPVL7jLO4PCW3w1mTi5iIAJNA=s48-c-k-c0x00ffffff-no-rj",
                "name": "Charlie Brown Jr.",
                id: 'CharlieBrownJr'
            },
            {
                "logo": "https://yt3.ggpht.com/ytc/AKedOLQ3Z7pv5rHx8sB1D22KKCWA_kFQ4S3HIUHsxm9jcA=s88-c-k-c0x00ffffff-no-rj",
                "name": "CarryisLive",
                id: 'CarryisLive'
            }
        ],
        explore: [
            {
                head: "Em alta",
                icon: "local_fire_department"
            },
            {
                head: "Filmes",
                icon: "theaters"
            },
            {
                head: "Jogos",
                icon: "sports_esports"
            },
            {
                head: "Ao vivo",
                icon: "sensors"
            },
            {
                head: "Notícias",
                icon: "developer_board"
            },
            {
                head: "Aprender",
                icon: "lightbulb"
            },
            {
                head: "Esportes",
                icon: "sports_soccer"
            },
        ],
        moreYoutubes: [
            {
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
                "name": "Youtube Premium"
            },
            {
                "logo": "https://img.utdstc.com/icon/da1/075/da10758eb49eee15e14de4b0d4ac121ad41f44878ef403c6f8af704a8d7b4f49:200",
                "name": "Creator Studio"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-music-logo-50422973B2-seeklogo.com.png",
                "name": "Youtube Music"
            },
            {
                "logo": "https://seeklogo.com/images/Y/youtube-kids-logo-40C22D4579-seeklogo.com.png",
                "name": "Youtube Kids"
            },
            {
                "logo": "https://play-lh.googleusercontent.com/HPyYXe-ToibRPGtFd4Ni4gi7RVfpkj4s8HwtC6fhDPqO7JfkF1-ld2SYFdzOQh-9zXU",
                "name": "Youtube TV"
            },
        ],
        settings: [
            {
                head: "Configurações",
                icon: "settings"
            },
            {
                head: "Histórico de denún...",
                icon: "flag"
            },
            {
                head: "Ajuda",
                icon: "help"
            },
            {
                head: "Enviar Feedback",
                icon: "sms_failed"
            },
        ]
    }

    return (
        <>
            <div className='sidebarSection close' id='sidebarContainer'>
                <div className='miniSidebar' id='miniSidebar'>
                    {sideBarData.mainTabs.map((tab,i) => {
                        return <div key={i} className={`miniSidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                            <span className='material-symbols-rounded'>{tab.icon}</span>
                            <p>{tab.head}</p>
                        </div>
                        
                    })}
                </div>
                <div className='sidebarContainer' id='sidebarContainer'>
                    <div className='sidebarTabs'>
                        <div className='tabContainer'>
                            {sideBarData.mainTabs.map((tab,i) => {
                                return (<div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                                )
                            })}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='tabContainer'>
                            {sideBarData.externalTabs.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                                
                            })}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='subscriptions'>
                            <h2 className='mainSidebarHead'>Inscrições</h2>
                            {sideBarData.channels.map((tab) => {
                                return <div className='channelTab' key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='explore'>
                            <h2 className='mainSidebarHead'>Explorar</h2>
                            {sideBarData.explore.map((tab) => {
                                return <div className='sidebarTab' key={tab.head}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                            })}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className="moreYoutube">
                            <h2 className='mainSidebarHead'>Mais do Youtube</h2>
                            {sideBarData.moreYoutubes.map((tab) => {
                                return <div className='youtubeTabs' key={tab.logo}>
                                    <img src={tab.logo} alt={tab.logo} />
                                    <p>{tab.name}</p>
                                </div>
                                {/*i guess  */ }
                            })}
                        </div>
                        <div className='horizontalLine'></div>
                        <div className='tabContainer'>
                            {sideBarData.settings.map((tab,i) => {
                                return <div key={i} className={`sidebarTab ${tab.icon === selectedId && 'active'}`} onClick={() => setSelectedId(tab.icon)}>
                                    <span className='material-symbols-rounded'>{tab.icon}</span>
                                    {tab.head}
                                </div>
                                
                            })}
                        </div>
                        <div className='horizontalLine'></div>

                        <div className='sidebarBottomLinks'>
                            <Link to="/">About</Link>
                            <Link to="/">Press</Link>
                            <Link to="/">Copyright</Link>
                            <Link to="/">Contact</Link>
                            <Link to="/">Creator</Link>
                            <Link to="/">Advertise</Link>
                            <Link to="/">Developers</Link>
                        </div>
                        <div className='sidebarBottomLinks'>
                            <Link to="/">Terms</Link>
                            <Link to="/">Privacy</Link>
                            <Link to="/">Policy &amp; Safety</Link>
                            <Link to="/">How Youtube works</Link>
                            <Link to="/">Test new features</Link>
                            <h3>&copy; Pedro Fonseca</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;