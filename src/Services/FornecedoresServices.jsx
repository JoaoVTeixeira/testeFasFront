import axios from 'axios';
 
var FornecedoresServices = {
  getAllFornecedores: async () => {
    var fornecedoresAPI = axios.get('https://regal-wall-416906.wl.r.appspot.com/api/fornecedores/');
    return await fornecedoresAPI;
  },
  getById: async (id) => {
    var fornecedoresAPI = axios.get('https://regal-wall-416906.wl.r.appspot.com/api/fornecedores/'+id+'/');
    return await fornecedoresAPI;
  },
  postFornecedor: async (body) => {
    var fornecedoresAPI = axios.post('https://regal-wall-416906.wl.r.appspot.com/api/fornecedores/',body);
    return await fornecedoresAPI;
  }
  ,
  putFornecedor: async (id,body) => {
    var fornecedoresAPI = axios.put('https://regal-wall-416906.wl.r.appspot.com/api/fornecedores/'+id+'/',body);
    return await fornecedoresAPI;
  },
  changeState: async (id) => {
    var fornecedoresAPI = axios.put('https://regal-wall-416906.wl.r.appspot.com/api/fornecedores/ativar-desativar/'+id+'/');
    return await fornecedoresAPI;
  },

 
};

export default FornecedoresServices;