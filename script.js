
import { banner_themes } from './data.js'
import { recepts } from './data.js'
let header = document.querySelector('header')
let main = document.querySelector('main')
let footer = document.querySelector('footer')
let banner_img = document.querySelector('.banner_img img')
let shadow_img = document.querySelector('.shadow')
let baner_h1 = document.querySelector('.lets_cook h1')
let baner_p = document.querySelector('.lets_cook p')
let baner_h3 = document.querySelector('.lets_cook h3')
let lets_cook = document.querySelector('.lets_cook')
let recepts_cards = document.querySelector('.dish_cards')
let recept_page = document.querySelector('.recept_page')
let recept_page_img = document.querySelector('.recept_page .name img')
let recept_page_name = document.querySelector('.recept_page .name h1')
let recept_page_ing = document.querySelector('.p1')
let recept_page_cook = document.querySelector('.p2')
let back = document.querySelector('.back_btn')

let current_theme = 0
function wait(ms){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve()
        }, ms)
    })
}
async function change_theme(){
    anime ({
        targets: '.banner_img img',
        easing: 'linear',
        duration: 500,
        translateY: 100,
        opacity: 0,
    })
    anime ({
        targets: '.lets_cook',
        easing: 'linear',
        duration: 700,
        translateX: -200,
        opacity: 0,
    })
    await wait(700)
    header.style.background = banner_themes[current_theme].bg_color
    banner_img.src = banner_themes[current_theme].image
    
    shadow_img.style.filter = banner_themes[current_theme].filter
    baner_h1.innerHTML = banner_themes[current_theme].h1
    baner_p.innerHTML = banner_themes[current_theme].p
    baner_h3.innerHTML = banner_themes[current_theme].h3
    if(current_theme === banner_themes.length - 1){
        current_theme = 0
    }
    else{
        current_theme += 1
    }
    anime ({
        targets: '.banner_img img',
        easing: 'linear',
        duration: 500,
        translateY: 0,
        opacity: 1,
    })
    anime ({
        targets: '.lets_cook',
        easing: 'linear',
        duration: 700,
        translateX: 0,
        opacity: 1,
    })
    
}
change_theme()

setInterval(change_theme, 5000)



recepts.forEach(recept => {
    let card = document.createElement('div')
    card.className = "recept_card"
    card.id = `recept_${recept.id}`
    let image = document.createElement('img')
    let name = document.createElement('h3')
    let button = document.createElement('button')
    image.id = `recept_img_${recept.id}`
    image.className = "recept_img"
    name.id = `recept_name_${recept.id}`
    name.className = "recept_name"
    button.id = recept.id
    
    recepts_cards.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(button)
    image.src = recept.img
    name.innerHTML = recept.title
    button.innerHTML = "Рецепт"
    button.addEventListener('click', function() {
        recept_page.style.display = 'flex'
        recept_page_img.src = recept.img
        recept_page_name.innerHTML = recept.title
        recept_page_ing.innerHTML = recept.ingredients
        recept_page_cook.innerHTML = recept.steps
        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
    })
});
back.addEventListener('click', function(){
    header.style.display = 'flex'
    main.style.display = 'flex'
    footer.style.display = 'flex'
    recept_page.style.display = 'none'
})

