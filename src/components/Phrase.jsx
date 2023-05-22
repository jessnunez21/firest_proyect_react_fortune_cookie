import React from 'react'

const Phrase = ({ phrasesRandom }) => {



  return (
    <>
      <div className='cart__phrase'>
          <p>
            {phrasesRandom.phrase}
          </p>
          </div>

      <div className='cart__author'>

      <blockquote>
      <p> {phrasesRandom.author}</p>
      </blockquote>
        
      </div>
      
    </>
  )
}

export default Phrase