import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { LeftMain } from "../../components/LeftMain"
import { Content } from "../../components/Content"
import { SearchBox } from '../../components/SearchBox'
import "../../assets/css/pedidos.css"

export const Pedidos = (props) => {
    const [iconDaVez, setIconDaVez] = useState("RiHome3Line")
    const [cor, setCor] = useState("#fff")   
    const [whatClassMain, setWhatClassMain] = useState("big")
    const navigate = useNavigate()
    const pedidos = [
        {id: "1", description: "Arroz", quantidade: "3", preco: 25.56},
        {id: "2", description: "Feijao", quantidade: "2", preco: 18.94},
        {id: "3", description: "Frango", quantidade: "3", preco: 45.05},
        {id: "4", description: "Cupim", quantidade: "5", preco: 12.52},
        {id: "5", description: "Costela", quantidade: "1", preco: 19.90}
    ]
    const [contador, setContador] = useState(0)
    const pedidosList = pedidos.map((pedido) => {
        <td>{pedido.id}</td>
        /*<td>{pedido.description}</td>,
        <td>{pedido.quantidade}</td>,
        <td>{pedido.preco}</td>        */
    })

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

    useEffect(() => {
        //alert("here")
    })

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
                <button 
                    className='btn-new' 
                    onClick={() => setContador(contador+1)}                
                >
                Novo
                </button>
                <SearchBox/>
                <table>
                    <tr>
                        <th>id</th>
                        <th>descrição</th>
                        <th>quantidade</th>
                        <th>preço</th>
                    </tr>
                    <tr>
                        {pedidosList}
                    </tr>
                </table>
            </Content>
        </div>
    )
}