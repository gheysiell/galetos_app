import "./index.css"

export const Content = (props) => {
    return (
        <div 
            className={props.whatClassMain === "little" ? "body-home-little" : "body-home-big"}
        >
            {props.children}
        </div>
    )
}