const prevArrow = document.getElementById('arrow-slider_prev')
const nextArrow = document.getElementById('arrow-slider_next')
const listBarner = document.querySelectorAll('.img-barner')
const length = listBarner.length
function clickPrevArrow() {
    for(var i=0;i<length;i++){
        if(listBarner[i].classList.value.includes('active')) {
            listBarner[(i === 0) ? (length-1) : (i-1)].classList.add('active')
            listBarner[i].classList.remove('active')
            break
        }
    }
}

function clickNextArrow() {
    for(var i=0;i<length;i++){
        if(listBarner[i].classList.value.includes('active')) {
            listBarner[(i === length-1) ? 0 : (i+1)].classList.add('active')
            listBarner[i].classList.remove('active')
            break
        }
    }
}


