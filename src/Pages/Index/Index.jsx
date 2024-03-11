import React from 'react'
import NavBar from '../../Components/GeneralComponents/NavBar'
 import './style.css'

function Index() {
    return (
        <div className='bg-success main-container'>


            <div className='container bg-light content-body'>
                <NavBar />
                <div className='carrossel-container header text-center mt-5 fs-2'>
                     Bem vindo ao Sistema de Gerenciamento de Fornecedores do Amazonas

                </div>
            </div>
        </div>
    )
}

export default Index