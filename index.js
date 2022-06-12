import {lisObjects} from "./libs/listObjects.js";
import {uploadObject} from "./libs/uploadObject.js";
import {getFile} from "./libs/fetchFile.js";

const bucketName = "iconnectsampleexperiment"
const ticketNo = "ticketNo"
const conversationId = "conversationId"
const url = "https://via.placeholder.com/600/56a8c2";

const main = async () => {
    const listParams = {Bucket: `${bucketName}`, Prefix: `${ticketNo}`,};
    const objectCount = await lisObjects(listParams)
    const fileStream = await getFile(url).then(r => r)
    const uploadParams = {
        Bucket: `${bucketName}`,
        Key: `${ticketNo}/${conversationId}/out.png`,
        Body: fileStream,
        ContentType: "image/png"
    };
    await uploadObject(uploadParams)
}
main().catch(e => console.log(e))