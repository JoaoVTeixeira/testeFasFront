import React from 'react'
import NavBar from '../../Components/GeneralComponents/NavBar'
import './style.css'
import FornecedoresTable from '../../Components/FornecedoresComponents/FornecedoresTable'
function FornecedoresIndex() {
    return (
        <div className='bg-success main-container'>


            <div className='container bg-light content-body'>
                <NavBar />
                <div className='container'>

                    <FornecedoresTable />
                </div>
            </div>
        </div>
    )
}

export default FornecedoresIndex