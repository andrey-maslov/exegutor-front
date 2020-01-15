const axios = require('axios');

let admHost = process.env.REACT_APP_ADMIN_HOST;

export const someFunc = () => {
    console.log('some function')
}

export const store = {

}

export function getAlbumsList() {
    axios
        .get(admHost + '/exegutor/v1/albums')
        .then(response => {
            const data = response.data;
            // console.log(data);
            return data;
        })
        .catch(error => {
            console.error(error)
        })
}