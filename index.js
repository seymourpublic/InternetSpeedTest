const NetworkSpeed = require('network-speed')
const testNetworkSpeed = new NetworkSpeed()

async function getDownloadSpeed(){
    const baseurl = "https://www.youtube.com/watch?v=n11z2Z0-MlA";
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseurl,fileSizeInBytes);
    console.log(speed)
}

getDownloadSpeed()

async function getUploadSpeed(){
    const options = {
        hostname: "www.google.com", 
        port: 80,
        path: "/catchers/544b09b4599c1d0200000289",
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
    };
    const fileSizeInBytes = 2000000;
    const speed = await testNetworkSpeed.checkUploadSpeed(options,fileSizeInBytes);
    console.log(speed)
    }
getDownloadSpeed()