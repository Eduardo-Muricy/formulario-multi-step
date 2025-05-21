import './App.css'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './Components/UserForm'
import RewielForm from './Components/ReviewForm'
import Thanks from './Components/Thanks'
import Steps from './Components/Steps'

import useForm from './Hooks/useForm'
import { useState } from 'react'

const formTemplate={
  name: '',
  email: '',
  review: '',
  comment: ''
}
const App = () => {
  const [data, setData]= useState(formTemplate)
  const updateFieldaHandler= (key, value)=>{
    setData((prev)=>{
      return {...prev, [key]: value}
    })
  }

  const formComponents=[<UserForm data={data} updateFieldaHandler={updateFieldaHandler} />,<RewielForm data={data} updateFieldaHandler={updateFieldaHandler}/>,<Thanks  data={data}/>]

  

  const {currentStep, currentComponent, changeStep, isLastStep, isFirsStep}= useForm(formComponents)
  return (
    
    <div className='app'>
      
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra. Preencha o formulário abaixo para avaliar o produto.</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e)=> changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
         {!isFirsStep && ( <button type='button' onClick={()=>changeStep(currentStep - 1)}> <GrFormPrevious /> <span>Voltar</span> </button>)}
            {!isLastStep ? (<button type='submit'> <span>Avançar </span><GrFormNext /> </button>) : (<button type='submit'> <span>Enviar </span><FiSend />   </button>)}
          </div>

        </form>


      </div>
    </div>
  )
}

export default App