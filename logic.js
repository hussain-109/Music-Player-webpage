const pause_button = document.getElementById('pause');
const play_button = document.getElementById('play');
const current_time = document.getElementById('start_time');
const end_time = document.getElementById('end_time');
var prev_ind = -1 , current_ind=0; var shuf = false;
var page_w = window.screen.width;
function change_to_pause()
{
    document.getElementById('pause').style.visibility = "visible";
    document.getElementById('play').style.visibility="hidden";
    document.getElementById('gif').src = "/images and media/Z23b.gif";
    document.getElementsByTagName('audio')[current_ind].play();
}
function change_to_play()
{
    document.getElementById('pause').style.visibility = "hidden";
    document.getElementById('play').style.visibility="visible";
    document.getElementById('gif').src = "/images and media/gif_image.png";
    document.getElementsByTagName('audio')[current_ind].pause();
}
function play_this_song(a)
{
    o= document.getElementsByClassName('list')[a];
    if(prev_ind!=(-1))
    {
        document.getElementsByClassName('list')[prev_ind].style.boxShadow="none";
        document.getElementsByClassName('list')[prev_ind].style.backgroundColor = "white";
        document.getElementsByClassName('list')[prev_ind].style.color = "black";
        document.getElementsByTagName('audio')[prev_ind].currentTime=0.0;
        document.getElementsByTagName('audio')[prev_ind].pause();
    }
    prev_ind=a;
    current_ind=a;
    document.getElementsByClassName('list')[a].style.boxShadow = "0rem 0rem 1rem greenyellow"
    document.getElementsByTagName('audio')[a].volume = document.getElementById('volume_bar').value;
    document.getElementsByClassName('player')[0].style.visibility = "visible";
    document.getElementById('current_song_in_player').innerHTML = o.innerHTML;
    o.style.backgroundColor = "rgb(35, 210, 67)";
    o.style.color = "white";
    document.getElementsByTagName('audio')[a].play();
    pause_button.style.visibility = "visible";
    play_button.style.visibility = "hidden";
    document.getElementById('gif').src = "/images and media/Z23b.gif";
    ovalue= document.getElementById('volume_bar').value*100;
    if(ovalue >67)
    {document.getElementById('volume_icon').src = "/images and media/volume-full-solid-24.png";}
    else if(ovalue>20&&ovalue<=67)
    {document.getElementById('volume_icon').src = "/images and media/volume-low-solid-24.png";}
    else if(ovalue<=20&&ovalue>0)
    {document.getElementById('volume_icon').src = "/images and media/volume-solid-24.png";}
    else
    {document.getElementById('volume_icon').src = "/images and media/volume-mute-solid-24.png";}
}
function display_time(o)
{
    current_timing = Math.floor(o.currentTime);
    total_timing = Math.floor(o.duration);
    if(total_timing>=3600)
    {
        var a; var b;
        a = Math.floor(total_timing/3600);
        b = total_timing%3600;
        end_time.innerHTML = a.toString()+":"+( Math.floor(b/60)).toString()+":";
        b=b%60;
        end_time.innerHTML = end_time.innerHTML +(b%60).toString(); //isme current time set karma baki hai
        
    }
    else{
        var a; var b;
        a =  Math.floor(total_timing/60);
        b= total_timing%60;
        end_time.innerHTML = a.toString()+":"+(b).toString();
        a =  Math.floor(current_timing/60);
        b= current_timing%60;
        current_time.innerHTML = a.toString()+":"+b.toString();
    }
    document.getElementById('time_line').value = (current_timing/total_timing)*100;

    if(current_timing==total_timing && shuf)
    {
        play_next_song()
    }
    else if(current_timing==total_timing&& !shuf)
    {
        document.getElementById('pause').style.visibility = "hidden";
        document.getElementById('play').style.visibility="visible";
        document.getElementById('gif').src = "/images and media/gif_image.png";
    }
}
function change_timeline_of_song()
{
    var to = document.getElementById('time_line').value;
    total_timing = Math.floor((document.getElementsByTagName('audio')[current_ind]).duration);
    to = (to/100)*total_timing;
    current_timing = to;
    if(total_timing>=3600)
    {
        var a; var b;
        a = Math.floor(total_timing/3600);
        b = total_timing%3600;
         //isme current time set karma baki hai
    }
    else{
        var a; var b;
        a =  Math.floor(current_timing/60);
        b= current_timing%60;
        current_time.innerHTML = a.toString()+":"+b.toString();
    }
    document.getElementsByTagName('audio')[current_ind].currentTime = to;
}
function volume_controller(o)
{
    document.getElementsByTagName('audio')[current_ind].volume = (o.value);
    ovalue= document.getElementById('volume_bar').value*100;
    if(ovalue >67)
    {document.getElementById('volume_icon').src = "/images and media/volume-full-solid-24.png";}
    else if(ovalue>20&&ovalue<=67)
    {document.getElementById('volume_icon').src = "/images and media/volume-low-solid-24.png";}
    else if(ovalue<=20&&ovalue>0)
    {document.getElementById('volume_icon').src = "/images and media/volume-solid-24.png";}
    else
    {document.getElementById('volume_icon').src = "/images and media/volume-mute-solid-24.png";}
}

function play_prev_song()
{
    if(prev_ind!=(-1))
    {
        document.getElementsByClassName('list')[prev_ind].style.boxShadow="none";
        document.getElementsByClassName('list')[prev_ind].style.backgroundColor = "white";
        document.getElementsByClassName('list')[prev_ind].style.color = "black";
        document.getElementsByTagName('audio')[prev_ind].currentTime=0.0;
        document.getElementsByTagName('audio')[prev_ind].pause();
    }
    if(current_ind==0)
    {
        current_ind =9;
        prev_ind =9;
    }
    else{
    prev_ind = current_ind-1;
    current_ind = current_ind-1;
    }
    o= document.getElementsByClassName('list')[current_ind];
    document.getElementsByClassName('list')[current_ind].style.boxShadow = "0rem 0rem 1rem greenyellow"
    document.getElementsByTagName('audio')[current_ind].volume = document.getElementById('volume_bar').value;
    document.getElementsByClassName('player')[0].style.visibility = "visible";
    document.getElementById('current_song_in_player').innerHTML = o.innerHTML;
    o.style.backgroundColor = "rgb(35, 210, 67)";
    o.style.color = "white";
    document.getElementsByTagName('audio')[current_ind].play();
    pause_button.style.visibility = "visible";
    play_button.style.visibility = "hidden";
    document.getElementById('gif').src = "/images and media/Z23b.gif";
}
function play_next_song()
{
    if(prev_ind!=(-1))
    {
        document.getElementsByClassName('list')[prev_ind].style.boxShadow="none";
        document.getElementsByClassName('list')[prev_ind].style.backgroundColor = "white";
        document.getElementsByClassName('list')[prev_ind].style.color = "black";
        document.getElementsByTagName('audio')[prev_ind].currentTime=0.0;
        document.getElementsByTagName('audio')[prev_ind].pause();
    }
    if(current_ind==9)
    {
        current_ind =0;
        prev_ind =0;
    }
    else{
    prev_ind = current_ind+1;
    current_ind = current_ind+1;
    }
    o= document.getElementsByClassName('list')[current_ind];
    document.getElementsByClassName('list')[current_ind].style.boxShadow = "0rem 0rem 1rem greenyellow"
    document.getElementsByTagName('audio')[current_ind].volume = document.getElementById('volume_bar').value;
    document.getElementsByClassName('player')[0].style.visibility = "visible";
    document.getElementById('current_song_in_player').innerHTML = o.innerHTML;
    o.style.backgroundColor = "rgb(35, 210, 67)";
    o.style.color = "white";
    document.getElementsByTagName('audio')[current_ind].play();
    pause_button.style.visibility = "visible";
    play_button.style.visibility = "hidden";
    document.getElementById('gif').src = "/images and media/Z23b.gif";
}
function shuffle(o)
{
    if(!shuf)
    {
    o.style.backgroundColor ="green";shuf=true;}
    else
    {o.style.backgroundColor ="black"; shuf=false;}
}
function mute()
{
    const ovalue= document.getElementById('volume_bar').value*100;
    if(ovalue>0)
    {
        document.getElementById('volume_bar').value="0";
        document.getElementsByTagName('audio')[current_ind].volume = "0";
        document.getElementById('volume_icon').src = "/images and media/volume-mute-solid-24.png";
    }
    else{
        document.getElementById('volume_bar').value="0.5";
        document.getElementsByTagName('audio')[current_ind].volume = "0.5";
        document.getElementById('volume_icon').src = "/images and media/volume-low-solid-24.png";
    }
}

function toggle_menu()
{
    // document.getElementsByClassName('menu_btn')[0].classList.toggle("menu_btn_work");
    
    document.getElementsByClassName('rods')[0].classList.toggle("menu_btn_rod1");
    document.getElementsByClassName('rods')[1].classList.toggle("menu_btn_rod2");
    document.getElementsByClassName('rods')[2].classList.toggle("menu_btn_rod3");
    document.getElementsByClassName('drop_down_menu')[0].classList.toggle('menu_show_hide');
    // document.getElementsByClassName('rods')[1].style.visibility="hidden";
    // document.getElementsByClassName('rods')[2].style.transform="rotate(-39deg)";
}