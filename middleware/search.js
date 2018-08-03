import axios from 'axios';
//import store from '../store'
import { Store } from 'vuex';

export default function( {params, store} ) {

  return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
    .then((response) => console.log(response));
}

