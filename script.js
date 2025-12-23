
import { banner_themes } from './data.js'
let header = document.querySelector('header')
let banner_img = document.querySelector('.banner_img img')
let shadow_img = document.querySelector('.shadow')
let baner_h1 = document.querySelector('.lets_cook h1')
let baner_p = document.querySelector('.lets_cook p')
let baner_h3 = document.querySelector('.lets_cook h3')
let lets_cook = document.querySelector('.lets_cook')


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
