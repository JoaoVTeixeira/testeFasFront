import React, { useState, useEffect } from 'react'
import FornecedoresServices from '../../Services/FornecedoresServices';
import { useNavigate } from 'react-router';
function FornecedoresTable() {

    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchTableData() {
            try {
                const response = await FornecedoresServices.getAllFornecedores();
                setTableData(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchTableData();
    }, []);

    // Calculate the indexes of the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);


    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const changeState =async (id) => {
        alert("Aguarde pode demorar")
        await FornecedoresServices.changeState(id);
        window.location.reload()    }

    return (
        <div className='mt-5 w-100'>
            <div className='text-end mb-3 '>
                <div className='text-end btn btn-success shadow' onClick={()=>navigate('/fornecedores/cadastrar')}>
                    Cadastrar Fornecedor
                </div>

            </div>
            <table class="table table-hover table-striped shadow-sm">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF/CNPJ</th>

                        <th scope="col">Contato</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Atividade</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems.map((fornecedor, index) => (
                            <tr key={index}>
                                <th scope="row">{fornecedor?.id}</th>
                                <td>{fornecedor?.tipo == 'fisica' ? fornecedor?.nome_fantasia_pf : fornecedor?.nome_fantasia_pj}</td>
                                <td>{fornecedor?.tipo == 'fisica' ? fornecedor?.cpf : fornecedor?.cnpj}</td>
                                <td>{fornecedor?.contato}</td>
                                <td>{fornecedor?.tipo}</td>
                                <td>{fornecedor?.atividade}</td>
                                <td className={fornecedor?.ativo ? "btn spacing mr-2 btn-success bg-success text-light" : "btn spacing mr-2 btn-danger bg-danger text-light"}>{fornecedor?.ativo ? "Ativo" : "Inativo"}</td>
                                <td onClick={() => navigate(`/fornecedores/${fornecedor?.id}`)} className='btn spacing mr-2 btn-primary bg-primary text-light'>Visualizar</td>
                                <td onClick={()=>navigate('/fornecedores/alterar/'+fornecedor?.id+'/')} className='btn spacing mr-2 btn-warning bg-warning text-light'>Editar</td>
                                <td onClick={()=>changeState(fornecedor?.id)}className={!fornecedor?.ativo ? "btn spacing mr-2 btn-success bg-success text-light" : "btn spacing mr-2 btn-danger bg-danger text-light"}>{!fornecedor?.ativo ? "Ativar" : "Desativar"}</td>
                            </tr>
                        ))
                    }

                </tbody>


                <div className='flex '>

                    <div className='container'>

                        {currentPage > 1 &&
                            <div className='btn btn-info' onClick={() => handlePageChange(currentPage - 1)}>
                                Página Anterior
                            </div>
                        }

                        <div className='btn btn-info' onClick={() => handlePageChange(currentPage + 1)}>
                            Próxima Página
                        </div>
                    </div>
                </div>
            </table>
        </div>
    )
}

export default FornecedoresTable