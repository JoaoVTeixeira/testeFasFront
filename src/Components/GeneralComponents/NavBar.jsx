import React from 'react'
import './navbar.css'

function NavBar() {
    return (
        <div className='navbar-container shadow-sm'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">SGFAM</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/fornecedores/lista">Fornecedores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/produtos/lista">Produtos</a>
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar