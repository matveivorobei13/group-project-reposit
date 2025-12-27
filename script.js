
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
let like_btn = document.querySelector('.like_button')
let liked_recepts = document.querySelector('.like_recepts_div')
recept_page.style.opacity = 0

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
        translateY: -100,
        opacity: 0,
    })
    anime ({
        targets: '.lets_cook',
        easing: 'linear',
        duration: 700,
        translateX: -200,
        opacity: 0,
    })
    anime ({
        targets: '.shadow',
        easing: 'linear',
        duration: 700,
        opacity: 0
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
    anime ({
        targets: '.shadow',
        easing: 'linear',
        duration: 700,
        opacity: 1
    })
    
}
change_theme()

setInterval(change_theme, 5000)

let current_recept;

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
    card.style.background = recept.bg
    recepts_cards.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(button)
    image.src = recept.img
    name.innerHTML = recept.title
    button.innerHTML = "Рецепт"
    button.addEventListener('click', async function() {
        current_recept = recept.id - 1
        anime ({
            targets: 'header, main, footer',
            duration: 800,
            easing: 'linear',
            
            opacity: 0
        })
        await wait(800)

        header.style.display = 'none'
        main.style.display = 'none'
        footer.style.display = 'none'
        recept_page.style.display = 'flex'
        recept_page_img.src = recept.img
        recept_page_name.innerHTML = recept.title
        recept_page_ing.innerHTML = recept.ingredients
        recept_page_cook.innerHTML = recept.steps
        recept_page.style.background = recept.bg

        anime ({
            targets: '.recept_page',
            duration: 800,
            easing: 'linear',
            
            opacity: 1
        })
        
        
    })
    
});
back.addEventListener('click', async function(){
    anime ({
            targets: '.recept_page',
            duration: 800,
            easing: 'linear',
            
            opacity: 0
        })
    await wait(800)
    recept_page.style.display = 'none'
    header.style.display = 'flex'
    main.style.display = 'flex'
    footer.style.display = 'flex'
    anime ({
            targets: 'header, main, footer',
            duration: 800,
            easing: 'linear',
            
            opacity: 1
        })
})

let liked_recepts_list = []
let liked_cards = []
like_btn.addEventListener('click', function(){
        if(recepts[current_recept].like === false){
            recepts[current_recept].like = true
            liked_recepts_list.push(current_theme)
            let liked_card = document.createElement('div')
            liked_card.className = 'liked_card'
            let img_liked_card = document.createElement('img')
            let ikon_name = document.createElement('div')
            let open_like_recept = document.createElement('button')
            open_like_recept.className = current_recept
            let delete_like_recept = document.createElement('button')
            ikon_name.className = 'ikon_name'
            let name = document.createElement('h3')
            liked_card.appendChild(ikon_name)
            ikon_name.appendChild(img_liked_card)
            ikon_name.appendChild(name)
            liked_card.appendChild(open_like_recept)
            liked_card.appendChild(delete_like_recept)
            img_liked_card.src = recepts[current_recept].img
            liked_recepts.appendChild(liked_card)
            liked_card.style.background = recepts[current_recept].bg
            name.innerHTML = recepts[current_recept].title
            open_like_recept.innerHTML = 'Рецепт'
            delete_like_recept.innerHTML = 'Видалити'
            liked_cards.push(liked_card)
            open_like_recept.addEventListener('click', async function() {
                current_recept = open_like_recept.className
                anime ({
                    targets: 'header, main, footer',
                    duration: 800,
                    easing: 'linear',
                    
                    opacity: 0
                })
                await wait(800)

                header.style.display = 'none'
                main.style.display = 'none'
                footer.style.display = 'none'
                recept_page.style.display = 'flex'
                recept_page_img.src = recepts[current_recept].img
                recept_page_name.innerHTML = recepts[current_recept].title
                recept_page_ing.innerHTML = recepts[current_recept].ingredients
                recept_page_cook.innerHTML = recepts[current_recept].steps
                recept_page.style.background = recepts[current_recept].bg

                anime ({
                    targets: '.recept_page',
                    duration: 800,
                    easing: 'linear',
                    
                    opacity: 1
                })
                
                
            })
            delete_like_recept.addEventListener('click', function() {
                liked_card.remove()
                recepts[current_recept].like = false
            })
            
        }
    })
