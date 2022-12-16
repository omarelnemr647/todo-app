import axios from "axios";

const  getTodos = async () => {
    try {
       const response = await axios.get('http://localhost:3006/todos')
       return response.data
    } catch (error) {
       console.log(error);
    }
 }


export default getTodos;
