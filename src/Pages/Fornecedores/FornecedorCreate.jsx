import React from 'react'
import NavBar from '../../Components/GeneralComponents/NavBar'
import './style.css'
import FornecedoresForm from '../../Components/FornecedoresComponents/FornecedoresForm'

function FornecedorCreate() {
    return (
        <div className='bg-success main-container'>


            <div className='container bg-light content-body'>
                <NavBar />
                <div className='container'>
 
                <div class="row mt-3" />

                    <FornecedoresForm method={"POST"}/>
                    
                </div>
            </div>
        </div>
    )
}

export default FornecedorCreate