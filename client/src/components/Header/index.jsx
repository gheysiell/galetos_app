import { RiArrowRightCircleLine, RiNotification3Line, RiUser3Line } from 'react-icons/ri'
import "./index.css"

export const Header = ({whatClassMain, setWidthLeftMain}) => {
   return (
      <header className={whatClassMain === "little" ? "home-header-little" : "home-header-big"}>
         <div 
            className={whatClassMain === "little" ? "toggle-main-left" : "toggle-main-left rotated"}
            onClick={setWidthLeftMain}
         >
            <RiArrowRightCircleLine className="icons-header" size="30px"/>
         </div>            
         <div className="icon-user"> 
            <RiNotification3Line className="icons-header" size="27px" style={{marginRight: "10px"}}/>
            <RiUser3Line className="icons-header" size="27px" style={{marginRight: "10px"}}/>
         </div>
      </header>
   )   
}