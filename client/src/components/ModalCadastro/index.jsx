const { RiCloseLine } = require("react-icons/ri")
require("./index.css")

export const ModalCadastro = () => {
    return (
        <div className="modal-container">            
            <div className="modal-window">
                <div className="modal-header">
                    <RiCloseLine 
                        size={24}                      
                        color="#525252"
                        cursor={"pointer"}
                    />
                </div>
                <div className="modal-main">
                    <div className="content-datas">
                        <label htmlFor="description">Descrição</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
                    </div>                                        
                    <div className="content-datas">
                        <label htmlFor="description">Quantidade</label>
                        <input id="description" type="text" className="main-inputs"/>
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