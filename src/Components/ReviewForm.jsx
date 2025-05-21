import {BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill} from 'react-icons/bs'
import './Steps.css'
import './ReviewForm.css'
const RewielForm = ({data, updateFieldaHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
    <label  className="radio-container">
      <input type="radio" name="review" value="unsastifield" required checked={data.review === 'unsastifield'} onChange={(e)=> updateFieldaHandler('review', e.target.value)}/>
      <BsFillEmojiFrownFill/>
      <p>Insatisfeito</p>
    </label>
     <label  className="radio-container">
      <input type="radio" name="review" value="neutral" required checked={data.review === 'neutral'} onChange={(e)=> updateFieldaHandler('review', e.target.value)} />
      <BsFillEmojiNeutralFill/>
      <p>Poderia ser melhor</p>
    </label>
    <label  className="radio-container">
      <input type="radio" name="review" value="satisfield" required checked={data.review === 'satisfield'} onChange={(e)=> updateFieldaHandler('review', e.target.value)}/>
      <BsFillEmojiSmileFill/>
      <p>Satisfeito</p>
    </label>
    <label  className="radio-container">
      <input type="radio" name="review" value="very_satisfield" required checked={data.review === 'very_satisfield'} onChange={(e)=> updateFieldaHandler('review', e.target.value)}/>
      <BsFillEmojiHeartEyesFill/>
      <p>Muito satisfeito</p>
    </label>
    
     
      </div>
      <div className="form-control">
        <label>Comentário:</label>
        <textarea name="comment" id="comment" placeholder='Conte como foi sua experiencia com o produto...' value={data.comment || ''} onChange={(e)=> updateFieldaHandler('comment', e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default RewielForm