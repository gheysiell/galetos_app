import { useState } from 'react'
import "./index.css"

export const ButtonNovo = (() => {
    const [contador, setContador] = useState(true)

    return(
        <button className='btn-new' onClick={() => setContador(contador+1)}>
            Novo
        </button>
    )
})