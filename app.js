let inputstr = document.getElementById('inputstr');
let button = document.getElementById('btn');
let title = document.querySelector('.title');
let dur = document.querySelector('.dur');
let vc = document.querySelector('.vc');
let linka = document.querySelector('.link');


const download = (url)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0945dc3903msh6c536d8e88bdf48p18e5d2jsn4ae94d997bd9',
            'X-RapidAPI-Host': 'youtube-video-info.p.rapidapi.com'
        }
    };
    
    fetch('https://youtube-video-info.p.rapidapi.com/video_formats?video='+url, options)
        .then(response => response.json())
        .then((response) => {
            if(response.VideoTitle == undefined){
                alert("Please Enter Valid Link");
            }
            else{
                title.innerHTML = response.VideoTitle;
                dur.innerHTML = response.Duration + " sec";
                vc.innerHTML = response.VideoViewsCount + " views";
                linka.download = response.VideoTitle;
                link(url);
            }
        })
        .catch(err => console.error(err));
}

const link = (url)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0945dc3903msh6c536d8e88bdf48p18e5d2jsn4ae94d997bd9',
            'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
        }
    };
    
    fetch('https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url?id='+url, options)
        .then(response => response.json())
        .then((response) => {
            linka.href=response.result.download_url;
            download(id);
        })
        .catch(err => console.error(err));
}

button.addEventListener('click',function(){
    let url =  inputstr.value;
    let x = url.split("=");
    let id = x[1];
    download(id);
})