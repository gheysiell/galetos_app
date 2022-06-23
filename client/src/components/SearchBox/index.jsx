import { useEffect, useState } from 'react'
import { HiOutlineSearch } from 'react-icons/hi'
import './index.css'

export function SearchBox() {
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        alert(focused ? "focused" : "non focused")
    })

    return(
        <div className='content-search' onClick={() => setFocused(true)}>
            <div className='content-input-search'>
                <input 
                    type="text" 
                    placeholder='Pesquisar' 
                    className='input-search'
                    /*onFucus={focused ? className="" : className=""}*/
                />
            </div>               
            <div className='content-img-search'>
                <HiOutlineSearch size='23px' color='#fff'/>
            </div>
        </div>
    )
}