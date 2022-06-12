import {PutObjectCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./s3Client.js"; // Helper function that creates an Amazon S3 service client module.
// import {getFile} from "./fetchFile.js";

// const url = "https://via.placeholder.com/600/24f355";
//
// const fileStream = await getFile(url).then(r => r)
// // console.log("lot of data",fileStream)
// const uploadParams = {
//     Bucket: "iconnectsampleexperiment",
//     // Add the required 'Key' parameter using the 'path' module.
//     Key: "in.png",
//     // Add the required 'Body' parameter
//     Body: fileStream,
// };

// Upload file to specified bucket.
export const uploadObject = async (uploadParams) => {
    try {
        // console.log("Success", data);
        await s3Client.send(new PutObjectCommand(uploadParams)); // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
};
// uploadObject(uploadParams)