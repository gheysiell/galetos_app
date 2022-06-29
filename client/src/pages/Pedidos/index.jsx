import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { LeftMain } from "../../components/LeftMain"
import { Content } from "../../components/Content"
import { SearchBox } from '../../components/SearchBox'
import { ButtonNovo } from '../../components/ButtonNovo'
import { ContentHeaderBody } from '../../components/ContentHeaderBody'
import { Container } from '../../components/Container'
import { BiEdit } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import "../../assets/css/pedidos.css"

export const Pedidos = (props) => {
    const [iconDaVez, setIconDaVez] = useState("RiHome3Line")
    const [cor, setCor] = useState("#fff")   
    const [whatClassMain, setWhatClassMain] = useState("big")
    const navigate = useNavigate()
    const pages = [
        {'number': '<<'}, 
        {'number': '<'}, 
        {'number': 3}, 
        {'number': 4}, 
        {'number': 5},
        {'number': '>'},
        {'number': '>>'}
    ]
    const quantPage = pages.map((page) => {
        return(
            <div className='pagination-boxes'>
                <span>{page.number}</span>
            </div>
        )
    })
    const pedidos = [
        {id: "1", description: "Arroz", quantidade: 3, preco: 25.56},
        {id: "2", description: "Feijao", quantidade: 2, preco: 18.94},
        {id: "3", description: "Frango", quantidade: 3, preco: 45.05},
        {id: "4", description: "Cupim", quantidade: 5, preco: 12.52},
        {id: "5", description: "Costela", quantidade: 1, preco: 19.90},
        {id: "6", description: "Galetos", quantidade: 1, preco: 78.93},
        {id: "7", description: "Coxinha", quantidade: 3, preco: 43.12},
        {id: "8", description: "Coca-cola", quantidade: 2, preco: 54.12},
        {id: "9", description: "Fanta", quantidade: 1, preco: 60.52},
        {id: "10", description: "Guarana", quantidade: 4, preco: 15.21},
        {id: "11", description: "Dydyo", quantidade: 7, preco: 18.43},
        {id: "11", description: "Dydyo", quantidade: 7, preco: 18.43},
        {id: "11", description: "Dydyo", quantidade: 7, preco: 18.43},
        {id: "11", description: "Dydyo", quantidade: 7, preco: 18.43},
        {id: "11", description: "Dydyo", quantidade: 7, preco: 18.43}
    ]
    const pedidosList = pedidos.map((pedido) => {
        return(
            <tr className='data-row-table-pedido'>
                <td>{pedido.id}</td>
                <td>{pedido.description}</td>
                <td>{pedido.quantidade}</td>
                <td>{pedido.preco}</td>            
                <td width={"90px"}>
                    <div className='content-actions-table'>
                        <div className="button-list-edit">
                            <BiEdit 
                                style={{color: "#fff"}}
                                size="18px"
                            />
                        </div>                        
                        <div className="button-list-delete">
                            <BiTrash
                                style={{color: "#fff"}}
                                size="18px"
                            />
                        </div>
                    </div>
                </td>            
            </tr>
        )
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
        <Container>
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
                <ContentHeaderBody>
                    <ButtonNovo/>
                    <SearchBox/>
                </ContentHeaderBody>
                <div className='content-table-pedido'>
                    <table className="table-pedido">
                        <tr className='header-row-table-pedido'>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr> 
                        {pedidosList}
                    </table>
                </div>
                <div className='content-footer-pedido'>
                    <div className='content-pagination'>
                        {quantPage}
                    </div>
                </div>
            </Content>
        </Container>
    )
}