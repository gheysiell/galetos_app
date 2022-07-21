const { RiCloseLine } = require("react-icons/ri")
const axios = require('axios').default
require("./index.css")

export const ModalCadastro = (props) => {
    axios.get('http://localhost:3001/products')
    .then((response) => console.log(response))
    .catch((err) => console.log(`Error: ${err}`))

    const productsList = [
        {id: "1", description: "coca-cola", valor: 13.65, estoque: 3},
        {id: "2", description: "costela", valor: 32.12, estoque: 12},
        {id: "3", description: "cupim", valor: 23.54, estoque: 23},
        {id: "4", description: "galetos", valor: 51.24, estoque: 34},
        {id: "5", description: "frango", valor: 23.15, estoque: 11},
        {id: "6", description: "guaraná", valor: 45.75, estoque: 24},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
        {id: "7", description: "Picanha", valor: 32.72, estoque: 54},
    ]

    const dataProductsList = productsList.map((product) => {
        return(
            <tr className="table-row-products">
                <td className="table-data-products">{product.id}</td>
                <td className="table-data-products">{product.description}</td>
                <td className="table-data-products">{product.valor}</td>
                <td className="table-data-products">{product.estoque}</td>
            </tr>
        )
    })

    return (
        <div className={props.modalVisible === true ? "modal-container-visible" : "modal-container-in-visible"}>
            <div className="modal-window">
                <div className="modal-header" onClick={() => {props.setModalVisible()}}>
                    <RiCloseLine 
                        size={24}                      
                        color="#525252"
                        cursor={"pointer"}
                    />
                </div>
                <div className="modal-main">
                    {/*<label className="labels-inputs">Selecione os produtos</label>*/}
                    <div className="content-table">
                        <table className="table-products">
                            <tr className="table-row-products-header">
                                <th className="table-header-products">Código</th>
                                <th className="table-header-products">Descrição</th>
                                <th className="table-header-products">Valor</th>
                                <th className="table-header-products">Estoque</th>
                            </tr>    
                            {dataProductsList}
                        </table>
                    </div>
                    {/*<label className="labels-inputs">Pedidos confirmados</label>
                    <div className="content-pedido-confirmed">
                        <table className="table-products">
                            <tr>
                                <th>Código</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Estoque</th>
                            </tr>    
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </table>
                    </div>*/}
                </div>                
                <div className="modal-footer">
                    <button 
                        className="button-cancel"
                    >Cancelar</button>
                    <button
                        className="button-confirm"
                    >Confirmar</button>
                </div>
            </div>            
        </div>
    )
}