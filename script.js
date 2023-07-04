console.log(" Welcome to Spotify ");

// Initialize the Variables
let songIndex=0;
let audioElement = new Audio("img/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let MyProgressBar = document.getElementById('MyProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Yaari" , filePath :"img/1.mp3" , coverPath: "img/yaari.png"},
    {songName: "Chaand Sifarish" , filePath :"img/2.mp3" , coverPath: "img/chaand_sifarish.png"},
    {songName: "Saiyaara" , filePath :"img/3.mp3" , coverPath: "img/saiyaara.png"},
    {songName: "Hue-Bechain" , filePath :"img/4.mp3" , coverPath: "img/hue_bechain.png"},
    {songName: "Punjabiyan-Di-Dhee" , filePath :"img/5.mp3" , coverPath: "img/punjabiyan_di_dhee.png"},
]

songItems.forEach((element,i)=>{
     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-play-circle');  
        gif.style.opacity = 0;
    }
})

//Listen to events 
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');

    //Update Seekbar
   let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    MyProgressBar.value = progress;
})

MyProgressBar.addEventListener('change',()=>{
audioElement.currentTime = MyProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `img/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>=4){
    songIndex=0;
}
else{
    songIndex = songIndex + 1;
}
    audioElement.src = `img/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
     gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=4;
    }
    else{
        songIndex = songIndex - 1;
    }
        audioElement.src = `img/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-circle-pause');
    })