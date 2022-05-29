import chickenImg from '../../assets/img/chicken.png'
import { RiInformationLine, RiLogoutCircleRLine, RiCouponLine, RiSettings3Line, RiHome3Line } from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FiBox } from 'react-icons/fi'
import "./index.css"

export const LeftMain = ({whatClassMain, changeColorActive, logOut, iconDaVez, cor }) => {
   return (
      <div className={whatClassMain === "little" ? "left-main-little" : "left-main-big"}>
         <div className={whatClassMain === "little" ? "left-main-icon-little" : "left-main-icon-big"}>
            <img src={chickenImg} style={{width: "40px"}}/>
            <h2
               className={whatClassMain === "little" ? "hidden" : "show-left-main-icon"}
            >
               Galetos
            </h2>
         </div>
         <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div
               className={ whatClassMain === "little" ? "options-main-little" : "options-main-big" }
               onClick={() => {changeColorActive("RiHome3Line")}}
            >
               <RiHome3Line size="27px" style={{color: iconDaVez === "RiHome3Line" ? cor : "#fff"}}/>
            </div>
            <div
               className={ whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Home
            </div>
         </div>
         <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={ whatClassMain === "little" ? iconDaVez === "RiCouponLine" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "RiCouponLine" ? "options-main-big selected-option" : "options-main-big inactive-option" }
               onClick={() => {changeColorActive("RiCouponLine")}}
            >
               <RiCouponLine size="27px" style={{color: cor}}/>
            </div>
            <div
               className={ whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Pedidos
            </div>
         </div>
         <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={ whatClassMain === "little" ? iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-big selected-option" : "options-main-big inactive-option" }
               onClick={() => {changeColorActive("AiOutlineUsergroupAdd")}}
            >
               <FiBox size="27px"/>
            </div>
            <div
               className={ whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Produtos
            </div>
         </div>
         <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={ whatClassMain === "little" ? iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-big selected-option" : "options-main-big inactive-option" }
               onClick={() => {changeColorActive("AiOutlineUsergroupAdd")}}
            >
               <AiOutlineUsergroupAdd size="27px"/>
            </div>
            <div
               className={ whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Clientes
            </div>
         </div>  
         <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={whatClassMain === "little" ? iconDaVez === "RiInformationLine" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "RiInformationLine" ? "options-main-big selected-option" : "options-main-big inactive-option" }
               onClick={() => {changeColorActive("RiInformationLine")}}
            >
               <RiInformationLine size="27px"/>
            </div>
            <div
               className={whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Sobre
            </div>
         </div>    
         <div className="options-main-bottom">
            <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
               <div 
                  className={whatClassMain === "little" ? iconDaVez === "RiSettings3Line" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "RiSettings3Line" ? "options-main-big selected-option" : "options-main-big inactive-option" }
                  onClick={() => {changeColorActive("RiSettings3Line")}}
               >
                  <RiSettings3Line size="27px"/>
               </div>
               <div
                  className={whatClassMain === "little" ? "hidden" : "show-options-names" }
               >
                  Configurações
               </div>
            </div>
            <div className={whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
               <div 
                  className={whatClassMain === "little" ? iconDaVez === "RiLogoutCircleRLine" ? "options-main-little selected-option" : "options-main-little inactive-option" : iconDaVez === "RiLogoutCircleRLine" ? "options-main-big selected-option" : "options-main-big inactive-option" }
                  onClick={() => {changeColorActive("RiLogoutCircleRLine")}}                  
               >
                  <RiLogoutCircleRLine size="24px" onClick={logOut}/>
               </div>
               <div
                  className={whatClassMain === "little" ? "hidden" : "show-options-names" }
               >
                  Logout
               </div>
            </div>               
         </div>        
      </div>
   )
}