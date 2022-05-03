let cron = 0
let count = 'start'
let count2 = 0
var interval
function cronometro(){
    let minutos = document.getElementById('minutos-id')
    let segundos = document.getElementById('segundos-id')
    let text = document.getElementById('text-id')
    let min = Number(minutos.value)
    let seg = Number(segundos.value)
    interval = setInterval(function(){
        
        if(min <= 0 && seg <= 0){
            text.innerHTML = 'Finished'
        }
        if(seg == 0 || count2 == 60 && min >0){
            count2 = 0
            seg += 60
            if(min > 0){
                min -= 1
        }
    }
        count2 += 1
        seg -= 1
        text.innerHTML = `${min}:${seg}`
        
        
    }, 1000)


    if(count == 'start'){
        let img = document.getElementById('image-play-or-stop').src='images/pause.svg'
        count = 'pause'
        interval = clearInterval(1000)
        
    }else if(count = 'pause'){
        let img = document.getElementById('image-play-or-stop').src='images/play.svg'
        count = 'start'
        clearInterval(1000)
        
    }

}
