import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

import FornecedoresServices from '../../Services/FornecedoresServices';

function FornecedoresForm({ method }) {

    const { id } = useParams();
    const [isToggled, setToggled] = useState(false);

    const [disabledForm, setDisabled] = useState(method === "GET" ? true : false)

    const handleToggle = () => {
        setToggled(!isToggled);

    };

    const [formData, setFormData] = useState({})

    useEffect(() => {
        async function fetchById() {
            try {
                const response = await FornecedoresServices.getById(id);
                setFormData(response.data[0]);
            } catch (error) {
                console.error(error);
            }
        }
        fetchById();
    }, []);

    useEffect(() => {
        if (formData?.tipo === "fisica") {
            setToggled(true)
        } else {
            setToggled(false)
        }
    }, [formData?.tipo]);

    function formatDate(dateString) {
        const formattedDate = new Date(dateString).toISOString().split('T')[0];
        return formattedDate;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    console.log(formData)
    const handleSubmit = async () =>
    {
        try {
            
            if(method === "POST"){
    
                var submitForm = {
                    Data: "2024-03-11",
                    txmodify: "admin",
                    tipo: isToggled ? "fisica" : "juridica",    
                    ativo: 1,
                    observacao: formData?.observacao ? formData?.observacao : null,
                    atividade: formData?.atividade ? formData?.atividade : null,
                    contato: formData?.contato ? formData?.contato : null,
                    dados_bancarios: {
                        agencia: formData?.agencia ? formData?.agencia : null,
                        banco: formData?.banco ? formData?.banco : null,
                        conta: formData?.conta ? formData?.conta : null
                    },
                    endereco: {
                        cep:formData?.cep ? formData?.cep : null,
                        bairro:formData?.bairro ? formData?.bairro : null,
                        endereco: formData?.endereco ? formData?.endereco : null,
                        cidade_id: 1,
                        estado_id: 1,
                    }
                }
    
                if(isToggled){
                    submitForm = {
                        ...submitForm,

                        pessoa_juridica: null,
                        pessoa_fisica:{
                            nome_fantasia: formData?.nome_fantasia ? formData?.nome_fantasia : null,
                            email:formData?.email_pf ?formData?.email_pf : null,
                            telefone:formData?.telefone_pf ?formData?.telefone_pf : null,
                            cpf:formData?.cpf ? formData?.cpf : null,
                            pis:formData?.pis ? formData?.pis : null,
                            data_nascimento:formData?.data_nascimento ? formData?.data_nascimento : null
                         }
                    }
                }else{
                    submitForm = {
                        ...submitForm,
                        pessoa_fisica:null,
                        pessoa_juridica:{
                            nome_fantasia: formData?.nome_fantasia ? formData?.nome_fantasia : null,
                            email:formData?.email_pj ?  formData?.email_pj : null,
                            telefone:formData?.telefone_pj ? formData?.telefone_pj : null,
                            cnpj:formData?.cnpj ? formData?.cnpj : null,
                            inscricao_estadual:formData?.inscricao_estadual ? formData?.inscricao_estadual : null,
                            razao_social:formData?.razao_social ? formData?.razao_social  : null
                        }
                    }
                }
                
                console.log(submitForm)
                const response = await FornecedoresServices.postFornecedor(submitForm)
                alert("Cadastrado, troque o ID na url para: " + response.data.id)
            }else if(method === "PUT"){
                var submitForm = {
                    Data: "2024-03-11",
                    txmodify: "admin",
                    tipo: isToggled ? "fisica" : "juridica",    
                    ativo: 1,
                    observacao: formData?.observacao ? formData?.observacao : null,
                    atividade: formData?.atividade ? formData?.atividade : null,
                    contato: formData?.contato ? formData?.contato : null,
                    dados_bancarios: {
                        agencia: formData?.agencia ? formData?.agencia : null,
                        banco: formData?.banco ? formData?.banco : null,
                        conta: formData?.conta ? formData?.conta : null
                    },
                    endereco: {
                        cep:formData?.cep ? formData?.cep : null,
                        bairro:formData?.bairro ? formData?.bairro : null,
                        endereco: formData?.endereco ? formData?.endereco : null,
                        cidade_id: 1,
                        estado_id: 1,
                    }
                }
    
                if(isToggled){
                    submitForm = {
                        ...submitForm,

                        pessoa_juridica: null,
                        pessoa_fisica:{
                            nome_fantasia: formData?.nome_fantasia ? formData?.nome_fantasia : null,
                            email:formData?.email_pf ?formData?.email_pf : null,
                            telefone:formData?.telefone_pf ?formData?.telefone_pf : null,
                            cpf:formData?.cpf ? formData?.cpf : null,
                            pis:formData?.pis ? formData?.pis : null,
                            data_nascimento:formData?.data_nascimento ? formData?.data_nascimento : null
                         }
                    }
                }else{
                    submitForm = {
                        ...submitForm,
                        pessoa_fisica:null,
                        pessoa_juridica:{
                            nome_fantasia: formData?.nome_fantasia ? formData?.nome_fantasia : null,
                            email:formData?.email_pj ?  formData?.email_pj : null,
                            telefone:formData?.telefone_pj ? formData?.telefone_pj : null,
                            cnpj:formData?.cnpj ? formData?.cnpj : null,
                            inscricao_estadual:formData?.inscricao_estadual ? formData?.inscricao_estadual : null,
                            razao_social:formData?.razao_social ? formData?.razao_social  : null
                        }
                    }
                }
                
                console.log(submitForm)
                const response = await FornecedoresServices.putFornecedor(id,submitForm)
                alert("Alterado, recarregue a pagina para verificar os dados: " )
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div class="container text-center">
            <div class="row">
                {
                    method !== "GET" &&
                    <div className='mb-3'>
                        <label className='mr-3'>Clique para mudar tipo de Pessoa</label>
                        <button onClick={handleToggle}>
                            {isToggled ? 'Pessoa Física' : 'Pessoa Jurídica'}
                        </button>
                    </div>
                }
                <div class="col">

                    <div>
                        <h6 className='text-center'>
                            Informações Específicas
                        </h6>
                        {
                            isToggled ?
                                <>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">CPF</label>
                                        <input type="text" name='cpf' value={isToggled && formData?.cpf} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">PIS</label>
                                        <input type="text" name='pis' value={isToggled && formData?.pis} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">DATA DE NASCIMENTO </label>
                                        <input type="date" name='data_nascimento' value={isToggled && formData?.data_nascimento && formatDate(formData?.data_nascimento)} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>
                                </>

                                :

                                <>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                        <input type="text" name='cnpj' value={!isToggled && formData?.cnpj} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">INSCRIÇÃO ESTADUAL</label>
                                        <input type="text" name='inscricao_estadual' value={!isToggled && formData?.inscricao_estadual} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">RAZÃO SOCIAL</label>
                                        <input type="text" name='razao_social' value={!isToggled && formData?.razao_social} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                                    </div>

                                </>
                        }

                        <h6 className='text-center'>
                            Informações Gerais
                        </h6>


                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">NOME(Caso Pessoa Jurídica preencha o Nome Fantasia)</label>
                            <input type="text" name='nome_fantasia' value={formData?.tipo == 'fisica' ? formData?.nome_fantasia_pf : formData?.nome_fantasia_pj} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">TELEFONE</label>
                            <input type="number" name={isToggled ? 'telefone_pf' : 'telefone_pj'} value={isToggled ? formData?.telefone_pf : formData?.telefone_pj} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">E-MAIL</label>
                            <input type="email" name={isToggled ? 'email_pf' : 'email_pj'} value={isToggled ? formData?.email_pf : formData?.email_pj} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">ATIVIDADE</label>
                            <input type="text" name='atividade' value={formData?.atividade} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">CONTATO</label>
                            <input type="text" name='contato' value={formData?.contato} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                        </div>


                    </div>
                </div>
                <div class="col-6">


                    <h6 className='text-center'>
                        Dados Bancários
                    </h6>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">AGENCIA</label>
                        <input type="number" name='agencia' value={formData?.agencia} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">BANCO</label>
                        <input type="text" name='banco' value={formData?.banco} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">CONTA</label>
                        <input type="text" name='conta' value={formData?.conta} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>
                    <h6 className='text-center mb-2'>
                        Endereço
                    </h6>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">CEP</label>
                        <input type="number" name='cep' value={formData?.cep} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">BAIRRO</label>
                        <input type="text" name='bairro' value={formData?.bairro} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">LOGRADOURO</label>
                        <input type="text" name='endereco' value={formData?.endereco} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>
                    <h6 className='mb-3'>Extra</h6>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">OBSERVAÇÃO</label>
                        <input type="text" name='observacao' value={formData?.observacao} onChange={handleChange} class="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" disabled={disabledForm} />
                    </div>
                </div>
                {
                    method !== "GET" &&     

                    <>
                    < button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </>
                }

        </div>
        </div >
    )
}

export default FornecedoresForm