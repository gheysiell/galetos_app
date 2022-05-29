import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import "../../assets/css/home.css"
import { Header } from '../../components/Header/'
import { LeftMain } from '../../components/LeftMain/'
import { Content } from '../../components/Content/'

export const Home = (props) => {
   const [iconDaVez, setIconDaVez] = useState("RiHome3Line")
   const [cor, setCor] = useState("#fff")   
   const [whatClassMain, setWhatClassMain] = useState("little")
   const navigate = useNavigate()

   const changeColorActive = (optionClicked) => {
      if (optionClicked === "RiHome3Line") {
         alert("RiHome3Line")
         setCor("#08D6A3")
         setIconDaVez("RiHome3Line")
      } else if (optionClicked === "RiCouponLine") {
         alert("RiCouponLine")
         setCor("#08D6A3")
         setIconDaVez("RiCouponLine")
      }
   }

   const setWidthLeftMain = () => {      
      whatClassMain === "little" ? setWhatClassMain("big") : setWhatClassMain("little")
   }

   const logOut = () => {
      navigate('/')
   }

   return (
      <div className="container">
         <LeftMain 
            whatClassMain={whatClassMain} 
            setWidthLeftMain={() => setWidthLeftMain()}
            changeColorActive={() => changeColorActive()} 
            logOut={() => logOut()}
            iconDaVez={iconDaVez}
            cor={cor}
            navigate={navigate}
         />
         <Header 
            whatClassMain={whatClassMain}
            setWidthLeftMain={() => setWidthLeftMain()}
         />
         <Content
            whatClassMain={whatClassMain}
         >
            <div className="statistics-panel">
               <div 
                  className="statistics-squares"
                  style={{background: "#FA8072"}}
               >
                  <div  className={"statistics-squares-titles"}>
                     <h5>Total de itens vendidos</h5>
                  </div>
                  <div className={"statistics-squares-values"}>
                     <h1>37</h1>
                  </div>                  
               </div>
               <div
                  className="statistics-squares"
                  style={{background: "#923effbe"}}
               >
                  <div className={"statistics-squares-titles"}>
                     <h5 >Total de valor</h5>
                  </div>
                  <div className={"statistics-squares-values"}>
                     <h1>23</h1>
                  </div>                  
               </div>
               <div 
                  className="statistics-squares"
                  style={{background: "#F4A460"}}
               >
                  <div className={"statistics-squares-titles"}>
                     <h5>Porcentagem de vendas batida</h5>
                  </div>
                  <div className={"statistics-squares-values"}>
                     <h1>06</h1>
                  </div>
               </div>
               <div
                  className="statistics-squares"
                  style={{background: "#17a7d3f1"}}
               >                  
                  <h5 className={"statistics-squares-titles"}>Produtos em estoque</h5>
                  <div className={"statistics-squares-values"}>
                     <h1>17</h1>
                  </div>
               </div>
            </div>
         </Content>
      </div>      
   )
}