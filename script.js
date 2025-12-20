let header = document.querySelector('header')
let banner_img = document.querySelector('.banner_img img')
let shadow_img = document.querySelector('.shadow')
let baner_h1 = document.querySelector('.lets_cook h1')
let baner_p = document.querySelector('.lets_cook p')
let baner_h3 = document.querySelector('.lets_cook h3')
let lets_cook = document.querySelector('.lets_cook')

let banner_themes = [
    {
        bg_color: "linear-gradient(127.6deg, #D4DB58 43.83%, #71752F 71.75%)",
        image: "image/burger.png",
        filter: "blur(30px)",
        h1: "LETS COOK <br> NOW!",
        p: "На нашому сайті <br> зібрано багато рецептів <br>навіть для тих хто не <br> вміє готувати</p>",
        h3: "Чому б тобі не спробувати?"
    },
    {
        bg_color: "linear-gradient(127deg,rgba(255, 221, 140, 1) 0%, rgba(64, 47, 10, 1) 100%)",
        image: "image/coffee2.png",
        filter: " blur(35px)",
        h1: "ENJOY <br> YOUR COFFEE",
        p: "На нашому сайті <br> зібрано найсмачніші <br> кавові рецепти <br> для енергійного дня",
        h3: "Тримай чашку і вперед!"
    },
    {
        bg_color: "linear-gradient(127deg,rgba(193, 255, 179, 1) 0%, rgba(0, 36, 0, 1) 100%)",
        image: "image/cookie.png",
        filter: " blur(45px)",
        h1: "SWEET <br> TREATS",
        p: "На нашому сайті <br> зібрано найсолодші <br> рецепти печива <br> навіть для початківців",
        h3: "Спробуй прямо зараз!",
    }
]
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
