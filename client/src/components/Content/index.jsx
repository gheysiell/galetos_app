import "./index.css"

export const Content = ({whatClassMain}) => {
   return (
      <div 
         className={whatClassMain === "little" ? "body-home-little" : "body-home-big"}
      >
      </div>
   )
}