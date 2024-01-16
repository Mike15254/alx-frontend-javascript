export default function loadBalancer(chinaDownload, UsDownload) {
    return Promise.race([chinaDownload, UsDownload])
        // .then((result) => {
        //     console.log(result);
        // })
        // .catch((error) => {
        //     console.error(error);
        // })
}