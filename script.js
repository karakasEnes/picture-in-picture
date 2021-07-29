const videoElement = document.getElementById("video");
const button = document.getElementById("button");



// async function to let user select media from navigator
// then selected media will pass to videoElement then we will let videoElement runs

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }


    } catch (err) {
        console.log(err)
    }
}

button.addEventListener("click", async () => {

    // we need to disable once we clicked the button
    button.disabled = true;
    // start video
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
})

selectMediaStream();