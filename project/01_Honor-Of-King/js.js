var btnEl = document.querySelector(".button-list");
var imgEl = document.querySelector(".img-list")
var imgArea = document.querySelector(".img-area")

var timeId = null
var index = 0
var flag = false;
btnEl.addEventListener("mouseover", function (event) {

    if (event.target !== btnEl) {
        if (flag) {
            flag.classList.remove("action")
        }
        event.target.classList.add("action");
        flag = event.target;
    }

    var list = Array.from(btnEl.children)
    for (var i = 0; i < list.length; i++) {
        if (event.target === list[i].children[0]) {
            index = i
        }
    }
    

    var activeEl = btnEl.querySelector(".action")
    if (activeEl) {
        activeEl.classList.remove("action")
    }

    imgEl.style.transform = `translate(${-604 * index}px,0)`
    imgEl.style.transition = "transform .5s ease"
});


function startTime() {
    timeId = setInterval(function () {
        index++

        if (index === imgEl.children.length) {
            index = 0
        }

        imgEl.style.transform = `translate(${-604 * index}px)`
        imgEl.style.transition = "transform .5s ease"

        var activeEl = btnEl.querySelector(".action")
        if (activeEl) {
            activeEl.classList.remove("action")
        }
        btnEl.children[index].children[0].classList.add("action")
    }, 1000)
}

startTime()

imgArea.addEventListener("mouseenter", function () {
    clearInterval(timeId)
})

imgArea.addEventListener("mouseleave", function () {
    startTime()
})


