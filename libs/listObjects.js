import {ListObjectsCommand} from "@aws-sdk/client-s3";
import {s3Client} from "./s3Client.js"; // Helper function that creates an Amazon S3 service client module.

// Create the parameters for the bucket
// const bucketParams = {Bucket: "iconnectsampleexperiment", Prefix: "ticketNumber",};

export const lisObjects = async (params) => {
    try {
        const data = await s3Client.send(new ListObjectsCommand(params));
        // console.log("Success", data.Contents);
        return data.Contents; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
};

// lisObjects(bucketParams)