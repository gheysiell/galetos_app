import "./index.css"

export const ButtonNovo = ((props) => {
    return(
        <button className='btn-new' onClick={() => {props.modalVisible === true ? props.setModalVisible() : props.setModalVisible()}}>
            Novo
        </button>
    )
})