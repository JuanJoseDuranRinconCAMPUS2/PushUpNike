import axios from "axios";

let url = `http://${import.meta.env.VITE_HOSTNAME}:${import.meta.env.VITE_PORT_BACKEND}/Especial/Producto`

export let getProducts = async ()=>{
    try{
        const response = await axios.post(url, {
            headers: {
                'content-Type': 'application/json',
                'Accept-Version': '1.0.1',
            }
        });

        console.log(response.data);
        return (response.data);      
    }catch(error){
        return (error.response);
    }
}
