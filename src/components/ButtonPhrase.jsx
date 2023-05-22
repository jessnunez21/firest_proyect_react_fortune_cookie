import getRandomElementFromArray from "../utilis/randomElemnetFromArray"
import phraseRandom from '../utilis/phrases.json'


const ButtonPhrase = ({setPhrasesRandom, setBackgroundImgRandom, arrBackground, setIsShow, isShow}) => {

    const handleRandomClick = () =>{
        setPhrasesRandom(getRandomElementFromArray(phraseRandom))

        const newPath = getRandomElementFromArray(arrBackground);
        setBackgroundImgRandom(newPath);

        
          setIsShow(!isShow);

          setTimeout(() => {
            setIsShow(isShow);
          }, 3000);

    }

    
  
    

  return (
    <div>
        <button className="cart__btn" onClick={(handleRandomClick) }>Prueba tu Suerte</button>
    </div>
  )
}

export default ButtonPhrase