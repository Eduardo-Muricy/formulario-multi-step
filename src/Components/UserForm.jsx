import  '../App.css'
const UserForm = ({data, updateFieldaHandler}) => {
  return (
    <div>


    <div className="form-control">
      <label htmlFor="name">Nome:</label>
       <input type="text" name='name' id='name' placeholder='Digite seu nome' required value={data.name || ''} onChange={(e)=> updateFieldaHandler('name', e.target.value)}/>
    </div>
    
    <div className="form-control">
      <label htmlFor="email">E-mail:</label>
       <input type="email" name='email' id='email' placeholder='Digite seu Email' required  value={data.email || ''} onChange={(e)=> updateFieldaHandler('email', e.target.value)}/>
    </div>

    </div>
  )
}

export default UserForm