import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import chickenImg from '../../assets/img/chicken.png'
import '../../assets/css/login.css'

export const Login = () => {
   let navigate = useNavigate()

   function validateLogin() {
      if (password === "root" && user === "root") {
         return navigate("/home");
      } else {
         alert("Login incorreto!")
      }        
   }

   const [user, setUser] = useState("")
   const [password, setPassword] = useState("")

   return (
      <div className="container">
         <div className="container-login">
            <div className="wrap-login">
               <form className="login-form">
                  <div className="img-title-login">
                     <img src={chickenImg} alt="galetos" style={{width: "50px"}}/>
                  </div>
                  <span className="login-form-title">
                     Galetos pedido
                  </span>
                  <div className="wrap-input">
                     <input 
                        className={user !== "" ? 'has-val input' : 'input'}
                        type="email"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                     />
                     <span className="focus-input" data-placeholder='Usuário'></span>
                  </div>
                  <div className="wrap-input">
                     <input 
                        className={password !== "" ? 'has-val input' : 'input'}
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                     <span className="focus-input" data-placeholder='Senha'></span>
                  </div>
                  <div className="container-login-form-btn">
                     <button 
                        className="login-form-btn"
                        onClick={validateLogin}
                     >Login</button>
                  </div>
                  <div className="text-center">
                     <Link className="txt2" to="/home">Esqueceu a senha ?</Link>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}