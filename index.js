const AWS = require("aws-sdk");
const axios = require("axios")
const dotenv = require("dotenv").config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ticketNumber = "ticketNumber";
const conversationId = "conversationId";
const url = "https://via.placeholder.com/600/24f355";

// List Bucket function
const listObjects = async (params) => {
    let data= await s3.listObjectsV2(params, function (err, data) {
        if (err) console.log(err, err.stack)
        console.log("callback",data)
        return data
    })
    console.log("outer",data)
}
const ListParams = {
    Bucket: process.env.Bucket_Name, Prefix: `${ticketNumber}`,
}
listObjects(ListParams)
// console.log(x)

// Upload to S3 function
const uploadFile = (params) => {
    s3.upload(params, function (s3Err, data) {
        if (s3Err) throw s3Err;
        console.log(`File uploaded successfully at ${data.Location}`);
    })
};

//function take image from URL and store in variable
const getFile = (url) => {
    return axios
        .get(url, {
            responseType: 'arraybuffer'
        })
        .then(response => response.data)
}

const mainScript = async () => {
    const ListParams = {
        Bucket: process.env.Bucket_Name,
        Prefix: `${ticketNumber}`,
    }
    let ObjectPresent = listObjects(ListParams)
    if (ObjectPresent) {
        const file = await getFile(url)
        const params = {
            Bucket: process.env.Bucket_Name,
            Key: `${ticketNumber}/${conversationId}/attachments/out.png`,
            Body: file,
            ContentType: 'image/png',
        }
        uploadFile(params)
    } else {
        const file = await getFile(url)
        const params = {
            Bucket: process.env.Bucket_Name,
            Key: `${ticketNumber}/${conversationId}/attachments/out.png`,
            Body: file,
            ContentType: 'image/png',
        }
        uploadFile(params)
    }
}
mainScript()


//Scratches
//testing file is getting downloaded or not
// const fs = require("fs")
// const downloadFile = async () => {
//     const data = await getFile(url)
//     fs.writeFile("out.png", data, 'base64', function (err) {
//         console.log(err);
//     });
// }
//
// downloadFile();
// const fetchedImage = async () => {
//     const file = await getFile(url)
//     const params = {
//         Bucket: process.env.Bucket_Name,
//         Key: `${ticketNumber}/${conversationId}/attachments/out.png`,
//         Body: file,
//         ContentType: 'image/png',
//     }
//     uploadFile(params)
// }
// fetchedImage()
