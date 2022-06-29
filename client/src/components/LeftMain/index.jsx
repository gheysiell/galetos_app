import chickenImg from '../../assets/img/chicken.png'
import { RiInformationLine, RiLogoutCircleRLine, RiCouponLine, RiSettings3Line, RiHome3Line } from 'react-icons/ri'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FiBox } from 'react-icons/fi'
import "./index.css"

export const LeftMain = (props) => {
   return (
      <div className={props.whatClassMain === "little" ? "left-main-little" : "left-main-big"}>
         <div className={props.whatClassMain === "little" ? "left-main-icon-little" : "left-main-icon-big"}>
            <img src={chickenImg} style={{width: "40px"}}/>
            <h2
               className={props.whatClassMain === "little" ? "hidden" : "show-left-main-icon"}
            >
               Galetos
            </h2>
         </div>
         <div 
            className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}
            onClick={(() => props.navigate('/home'))}
         >
            <div
               className={ props.whatClassMain === "little" ? "options-main-little" : "options-main-big" }
               onClick={() => {props.changeColorActive("RiHome3Line")}}
            >
               <RiHome3Line size="27px"/>
            </div>
            <div
               className={ props.whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Home
            </div>
         </div>
         <div 
            className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}
            onClick={() => props.navigate('/pedidos')}
         >
            <div 
               className={ props.whatClassMain === "little" ? props.iconDaVez === "RiCouponLine" ? "options-main-little " : "options-main-little " : props.iconDaVez === "RiCouponLine" ? "options-main-big " : "options-main-big " }
               onClick={() => props.changeColorActive("RiCouponLine")}
            >
               <RiCouponLine size="27px"/>
            </div>
            <div
               className={ props.whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Pedidos
            </div>
         </div>
         <div className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={ props.whatClassMain === "little" ? props.iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-little " : "options-main-little " : props.iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-big " : "options-main-big " }
               onClick={() => props.changeColorActive("AiOutlineUsergroupAdd")}
            >
               <FiBox size="27px"/>
            </div>
            <div
               className={ props.whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Produtos
            </div>
         </div>
         <div className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={ props.whatClassMain === "little" ? props.iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-little " : "options-main-little " : props.iconDaVez === "AiOutlineUsergroupAdd" ? "options-main-big " : "options-main-big " }
               onClick={() => props.changeColorActive("AiOutlineUsergroupAdd")}
            >
               <AiOutlineUsergroupAdd size="27px"/>
            </div>
            <div
               className={ props.whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Clientes
            </div>
         </div>  
         <div className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
            <div 
               className={props.whatClassMain === "little" ? props.iconDaVez === "RiInformationLine" ? "options-main-little " : "options-main-little " : props.iconDaVez === "RiInformationLine" ? "options-main-big " : "options-main-big " }
               onClick={() => props.changeColorActive("RiInformationLine")}
            >
               <RiInformationLine size="27px"/>
            </div>
            <div
               className={props.whatClassMain === "little" ? "hidden" : "show-options-names" }
            >
               Sobre
            </div>
         </div>    
         <div className="options-main-bottom">
            <div className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
               <div 
                  className={props.whatClassMain === "little" ? props.iconDaVez === "RiSettings3Line" ? "options-main-little " : "options-main-little " : props.iconDaVez === "RiSettings3Line" ? "options-main-big " : "options-main-big " }
                  onClick={() => props.changeColorActive("RiSettings3Line")}
               >
                  <RiSettings3Line size="27px"/>
               </div>
               <div
                  className={props.whatClassMain === "little" ? "hidden" : "show-options-names" }
               >
                  Configurações
               </div>
            </div>
            <div className={props.whatClassMain === "little" ? "container-options-main-little" : "container-options-main-big"}>
               <div 
                  className={props.whatClassMain === "little" ? props.iconDaVez === "RiLogoutCircleRLine" ? "options-main-little " : "options-main-little " : props.iconDaVez === "RiLogoutCircleRLine" ? "options-main-big " : "options-main-big " }
                  onClick={() => props.changeColorActive("RiLogoutCircleRLine")}
               >
                  <RiLogoutCircleRLine size="24px" onClick={props.logOut}/>
               </div>
               <div
                  className={props.whatClassMain === "little" ? "hidden" : "show-options-names" }
               >
                  Logout
               </div>
            </div>               
         </div>        
      </div>
   )
}