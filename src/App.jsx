

import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import Phrase from './components/phrase'
import phrasesList from './utilis/phrases.json'
import randomElementFromArray from './utilis/randomElemnetFromArray'
import boxCart from './assets/rectangle1 (2).svg'

const arrBackground = [1, 2, 3, 4, 5, 6, 7, 8, ]

function App() {

  const initialValiu = randomElementFromArray(phrasesList);

  const [phrasesRandom, setPhrasesRandom] = useState(initialValiu);
  const [backgroundImgRandom, setBackgroundImgRandom] = useState(randomElementFromArray(arrBackground))
 

  const objStyle = {
    backgroundImage: `url('/images/img-${backgroundImgRandom}.jpg')`
  }

  const [isShow, setIsShow] = useState(false)
  
 

  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>🍪Galletas de la   Fortuna🍪</h1>
      
      {
        isShow
        ?(<section className='cart__body'>
          <div className="cart__img">
            <img className='cart__border' src={boxCart} alt="BoxCart" />
          </div>
          
       
           <Phrase phrasesRandom={phrasesRandom}/>
           

          </section>)
          : <p className='cart__false'>Animate...</p>
      }

      <ButtonPhrase setPhrasesRandom={setPhrasesRandom} 
        setBackgroundImgRandom={setBackgroundImgRandom}
        arrBackground={arrBackground}
        setIsShow={setIsShow}/>

    </div>
  )
}

export default App
