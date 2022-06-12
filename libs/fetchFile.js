import axios from "axios"

// const url = "https://via.placeholder.com/600/24f355";


export const getFile = (url) => {
    return axios
        .get(url, {
            responseType: 'arraybuffer'
        })
        .then(response => response.data)
        // .then(r => console.log(r))
        .catch(e => console.log(e))
}

// let x = async () => {
//     return await getFile(url).then(r=>console.log(r))
// }
// console.log(x())