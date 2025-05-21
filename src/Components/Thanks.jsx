import React from 'react'
import './Thanks.css'
import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'
const Thanks = ({data}) => {
  const emojiData={
    unsatisfield:<BsFillEmojiFrownFill/>,
    neutral:<BsFillEmojiNeutralFill/>,
    satisfield:<BsFillEmojiSmileFill/>,
    very_satisfield:<BsFillEmojiHeartEyesFill/>
  }
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>Sua opinião é muito importante. Em breve voce receberá um cupom de 10% de desconto em nossa loja.</p>
     <h3>Resumo da sua avaliação, {data.name}:</h3>
     <p className='review-data'> <span>Satisfação com o produto: </span> {emojiData[data.review]}</p>
     <p className='review-data'> <span>Comentário:</span> {data.comment}</p>
    
    </div>
  )
}

export default Thanks