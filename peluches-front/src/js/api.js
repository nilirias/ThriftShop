import axios from 'axios';

axios.defaults.baseURL = 'https://peluches-api-grdpxbotjq-ue.a.run.app';
//axios.defaults.baseURL = 'http://localhost:5000';

const getProduct = (id) => (
  axios.get(`/product/${id}`)
    .then(resp => resp.data)
    .catch(err => console.error(err))
)

const getProducts = () => (
  axios.get(`/product`)
    .then(resp => resp.data)
    .catch(err => console.error(err))
)
  
const setToken = (email, password) => {
  return axios.post(`/auth`, {
   "email": email,
    "password": password
})
}

const updateStatus = (oid, status) => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${window.$cookies.get('token')}`}
  return axios.patch(`/purchase/${oid}/${status}`)
}


const setUser = (email) => {
axios.defaults.headers.common = {'Authorization': `Bearer ${window.$cookies.get('token')}`}
return axios.get(`/user/${email}`)
}

const getPurchases = () => {
  axios.defaults.headers.common = {'Authorization': `Bearer ${window.$cookies.get('token')}`}
  return axios.get(`/user/${window.$cookies.get('user')}/purchase`)
    .then(resp => resp.data)
    .catch(err => console.error(err))    
}

const registerUser = (username,firstName,lastName,password,email) => (
axios.post("/user",
{
    "username":username,
    "firstName":firstName,
    "lastName":lastName,
    "password":password,
    "email":email
}).then(resp => resp.data)
    .catch(err => console.error(err))    
)

const createOrder = (data ) => {
axios.defaults.headers.common = {'Authorization': `Bearer ${window.$cookies.get('token')}`}

return axios.post(`/user/${window.$cookies.get('user')}/purchase`,
{"products":data})    

}
export {updateStatus, createOrder, getProduct, getProducts, getPurchases, setToken, setUser, registerUser };
