console.log("welecome the spotify music")

let songIndex=0;
let audioElement= new Audio("songs/1.mp3")
let masterPlay=document.getElementById("masterPlay")
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")



let songItems=Array.from(document.getElementsByClassName("songItem"))


let songs=[

{songName: "let me love you", filePath:"songs/1.mp3",         coverPath:"covers/1.jpg"},
{songName: "best songs same name given", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
{songName: "best songs same name given", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
{songName: "best songs same name given", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
{songName: "best songs same name given", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
{songName: "best songs same name given", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
{songName: "best songs same name given", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
{songName: "best songs same name given", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
{songName: "best songs same name given", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
{songName: "best songs same name given", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}]
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

masterPlay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            gif.style.opacity=1
            
            
        }
    else{
            audioElement.pause();
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
            gif.style.opacity=0;
            
           

        }


    }
)
audioElement.addEventListener("timeupdate",()=>{
    // we will make a varibale that will keep  record of the percentage of the total song ended
  progress = (audioElement.currentTime/audioElement.duration)*100;
  myProgressBar.value=progress;


})
myProgressBar.addEventListener("change",()=>{
    
   audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100
})


const makeAllPlays = ()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click', (e)=>{ 
            makeAllPlays();
             songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
             audioElement.src = `songs/${songIndex+1}.mp3`;
             masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');})})
    















