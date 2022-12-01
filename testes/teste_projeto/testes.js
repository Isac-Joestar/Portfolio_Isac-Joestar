const controls = document.querySelectorAll('.control')
let currentItem = 0
let card = document.querySelectorAll('.card')

const maxCards = card.length

controls.forEach(control =>{
    control.addEventListener('click', (e)=>{
        const isLeft = control.classList.contains('arrow-right')
    
        if(isLeft){
            currentItem -= 1
        }else{
            currentItem +=1
        }

        if(currentItem >= maxCards - 4){
            currentItem = 0
        }
        if(currentItem < 0){
            currentItem = maxCards - 1
        }
        console.log('clicado', isLeft, card)

        card.forEach(item => 
            item.classList.remove('current_item'))

        card[currentItem].scrollIntoView({
            inline: 'start',
            behavior:'smooth'
        })
        card[currentItem].classList.add('current_item')
    })
})