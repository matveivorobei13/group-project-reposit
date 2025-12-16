let header = document.querySelector('header')
let banner_img = document.querySelector('.banner_img img')
let shadow_img = document.querySelector('.shadow')
let banner_themes = [
    {
        bg_color: "linear-gradient(127.6deg, #D4DB58 43.83%, #71752F 71.75%)",
        image: "image/burger.png",
        filter: "blur(30px)"
    },
    {
        bg_color: "linear-gradient(127deg,rgba(255, 221, 140, 1) 0%, rgba(64, 47, 10, 1) 100%)",
        image: "image/coffee.png",
        filter: " blur(40px)"
    },
    {
        bg_color: "linear-gradient(127deg,rgba(193, 255, 179, 1) 0%, rgba(0, 36, 0, 1) 100%)",
        image: "image/cookie.png",
        filter: " blur(45px)"
    }
]
let current_theme = 0
function change_theme(){
    header.style.background = banner_themes[current_theme].bg_color
    banner_img.src = banner_themes[current_theme].image
    shadow_img.style.filter = banner_themes[current_theme].filter
    if(current_theme === banner_themes.length - 1){
        current_theme = 0
    }
    else{
        current_theme += 1
    }
}
change_theme()

setInterval(change_theme, 5000)
