// const audio = document.getElementById('audio')

// const playPauseBTN = document.getElementById('playPauseBTN')

// const count = 0;

// function playPause(){

//     if(count == 0){
//         count = 1;
//         audio.play();
//         playPauseBTN.innerHTML = "Pause &#9208;";
//     }else{
//         count = 0;
//         audio.pause();
//         playPauseBTN.innerHTML = "Play &#9658;";
//     }
// }

function aud_play_pause() {
    var myAudio = document.getElementById("audio");
    myAudio.volume = 0.1
    myAudio.loop = true
    if (myAudio.paused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }

  // var audio = document.getElementById("myaudio");
  // audio.play();

  function play() {
    const audio = document.createElement("audio")
  audio.setAttribute("autoplay", "")
  const source = document.createElement("source")
  source.setAttribute("src", "https://docs.google.com/uc?export=download&id=1gqCEJ_ueatlG0H0W4KJwVok_Rql-iQV-")
  audio.prepend(source)
  }

 