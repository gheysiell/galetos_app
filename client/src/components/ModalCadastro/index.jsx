const { RiCloseLine } = require("react-icons/ri")
require("./index.css")

export const ModalCadastro = (props) => {
    const productsList = [
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
        {id: "1", description: "coca-cola", valor: 13.65},
    ]

    const dataProductsList = productsList.map(() => {
        return(
            <table>
                <tr>                                                                                
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
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
                    <div className="content-datas" style={{width: "80%"}}>
                        <label htmlFor="description">Selecione os produtos</label>
                        <div className="">
                            <table className="">
                                <tr>                                                                                                                                                                                                                        
                                    <th>Código</th>
                                    <th>Descrição</th>
                                    <th>Valor</th>
                                    <th>Estoque</th>
                                </tr>    
                                {dataProductsList}
                            </table>
                        </div>
                    </div>
                </div>                
                <div className="modal-footer">
                    <button 
                        className="button-cancel"
                    >Cancelar</button>
                    <button
                        className="button-save"
                    >Salvar</button>
                </div>
            </div>            
        </div>
    )
}