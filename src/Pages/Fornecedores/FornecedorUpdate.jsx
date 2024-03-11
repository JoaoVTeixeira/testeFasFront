import React from 'react'
import NavBar from '../../Components/GeneralComponents/NavBar'
import './style.css'
import FornecedoresForm from '../../Components/FornecedoresComponents/FornecedoresForm'

function FornecedorUpdate() {
    return (
        <div className='bg-success main-container'>


            <div className='container bg-light content-body'>
                <NavBar />
                <div className='container'>
 
                <div class="row mt-3" />

                    <FornecedoresForm method={"PUT"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default FornecedorUpdate