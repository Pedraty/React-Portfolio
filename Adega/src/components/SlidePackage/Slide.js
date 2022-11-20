import { useState, useEffect, useRef } from 'react'
import './Slide.css';
import {motion} from 'framer-motion'

import image1 from './image1.jpg'
import image2 from './image2.jpg'
import image4 from './image4.jpg'
import image5 from './image5.jpg'

const images = [image5,image1, image2, image4 ]

function Slide() {
  const carousel = useRef();
  const [width, setWidth] = useState(0) 

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div className="inner-carousel" drag="x" dragConstraints={{ right: 0, left: -width}} 
        intial={{ x : 0}}
        animate={{ x : 100}}
        transition={{ duration : 0.9}}>

          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} alt="Texto alt"/>
            </motion.div>
            
            ))}

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slide;
