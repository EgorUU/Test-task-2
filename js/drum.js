const upDrum = document.querySelector('.drum-el')
let spins = 2
const button = document.querySelector('.drum-el-button')
const bonus = document.querySelector('.alert-content>h2>span')
button.addEventListener('click', () => {
    if (spins !== 0) {
        spins--;
    }
    console.log('click');
    
    document.querySelector('.drum-container-adaptive-button>h1>span').textContent = spins
    document.querySelector('.drum__table-1-content>h1>span').textContent = spins
    button.style.pointerEvents = "none";
    if (spins === 0) {
        upDrum.classList.remove('up-active');
        upDrum.style.animation = 'newScrollingUpDrum 6s ease'
        document.querySelector('.alert-container').style.display = 'none';
    }
    else {
        upDrum.style.animation = 'scrollingUpDrum 6s ease'
    }
    setTimeout(() => {
        // internavDrum.style.animation = 'scrollingDrum 4s ease'
        // upDrum.src = './images/wheel active.png'
        // internavDrum.classList.add('internal-active')

        if (spins === 1) {
            bonus.style.display = 'none';
            button.style.pointerEvents = "all";
            upDrum.classList.add('up-active');
            document.querySelector('.alert-container').style.display = 'flex';
            upDrum.style.animation = 'none'
        }
        else if (spins < 1) {
            bonus.style.display = 'inline';
            document.querySelector('.alert-container').style.display = 'flex';
            upDrum.classList.add('new-up-active')
        }
        document.body.classList.add('body-active')
    }, 6000)
})
