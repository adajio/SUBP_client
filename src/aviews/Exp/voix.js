import {ref} from 'vue';
import axios from 'axios';

let BACKEND_URL = '';
const voix = (path,params) => {
  const z = ref();
  axios.post(BACKEND_URL+path,params).then(({data})=>{
    z.value = data.data; 
    z.$url = BACKEND_URL+path;
    console.log(10,data.data);
    z.revoix = (params) => {
      axios.post(z.$url,params).then(({data})=>{
        z.value = data.data; 
        console.log(13,data.data);
      });          
    }
  });
  return z;
}

voix.url = (url) => {
  BACKEND_URL = url;
}

export default voix;