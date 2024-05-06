const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream -> pass to video element -> play
async function selectMediaStream() {
    try {
        const captureStream = await navigator.mediaDevices.getDisplayMedia();
    } catch(error) {
        //catch error
        console.log('Error here:', error);
    } 
}

//on Load
selectMediaStream();