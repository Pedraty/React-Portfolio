import React, { useState } from 'react'
import './Home.css'
import { AdBanner, YoutubeLogo } from '../../Assets/ImageIndex'
import Video from './Video'
import VideoData from './Videos.json'

const Home = () => {

    const categoryData = ["Tudo", "Ao vivo", "Música", "Chill out", "Java", "React", "Lista de reprodução", "Banda Sonora", "Fuções polinomiais", "UFABC", "Equipe04", "PROA"]

    const {videos} = VideoData;

    const [category, setCategory] = useState("Tudo");

    const [onDisplay, setOnDisplay] = useState(videos);
    
    const handleCategory = (tag)=>{
        setCategory(tag)
        if (tag === "Tudo"){
            setOnDisplay(videos)
            return
        }
        setOnDisplay(videos.filter((video)=> video.category === tag))
    }

    return (
        <>
            <div className='homeContainer' id='homeContainer'>
                <div className='categoryContainer'>
                    {categoryData.map((tab) => {
                        return <h3 className={`categoryTab ${category === tab && 'active'}`} key={tab} onClick={() => handleCategory(tab)}>{tab}</h3>
                    })}
                </div>
                <div className="homeBanner">
                    <img src={AdBanner} alt="Ad Banner" className='youtubeAdBanner' />
                    <div className="infoBox">
                        <div>
                            <img src={YoutubeLogo} alt="Youtube Logo" />
                            <h2>Youtube Premium</h2>
                        </div>
                        <h1>Assista tudo que você ama</h1>
                        <button>COMECE AGORA</button>
                    </div>
                </div>
                <div className="videoContainer">
                    {onDisplay.map((video)=>{
                      return <Video video={video} key={video.image}/>  
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;