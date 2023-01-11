// .展示
var serverURL = "https://res.vmallres.com/pimages"
var ulEl = document.querySelector(".products")
var sectionEl = document.querySelector(".section")

var filterEls = []
// button.listener
var btnEls = sectionEl.querySelectorAll(".operation")
for (var i = 1; i < btnEls.length; i++) {
    btnEls[i].onclick = function () {

        this.classList.toggle("active")
        var text = this.textContent.trim()
        if (this.classList.contains("active") && !filterEls.includes(text)) {
            filterEls.push(text)
        } else {
            var index = filterEls.findIndex(function (item) {
                return item === text
            })
            filterEls.splice(index, 1)
        }
        // showFilter()
        fliterList()
    }
}

var filterList = resultList

function fliterList() {
// content of filter
    filterList = resultList.filter(function (item) {
        var flag = true
        for (var filterEl of filterEls) {
            if (!item.services.includes(filterEl)) {
                flag = false
                break
            }
        }
        return flag
    })
    show()
}


show()

function show() {
    // show
    ulEl.innerHTML = ""
    for (var ii = 0; ii < filterList.length; ii++) {
        var resultEl = filterList[ii]
        var itemEl = document.createElement("li")
        itemEl.className = "item"
        ulEl.append(itemEl)


        var serviceString = ""
        for (var label of resultEl.promoLabels) {
            serviceString += `<div class="tip"> ${label} </div>`
        }
        itemEl.innerHTML = `
            <a href="#">
                <div class="top">
                    <img src=${serverURL}${resultEl.photoPath}428_428_${resultEl.photoName} alt="" class="picture">
                </div>
                <div class="bottom">
                    <div class="title">
                        <span class="NewArrivals">新品上市</span>
                        <span>${resultEl.name}</span>
                    </div>
                    <div class="summary">${resultEl.promotionInfo}</div>
                    <div class="price">￥${resultEl.price}</div>
                    <div class="tips">
                        ${serviceString}
                    </div>
                    <div class="comment">
                        <span>${resultEl.rateCount}人评价</span>
                        <span>${resultEl.goodRate}%好评</span>
                    </div>
                </div>
            </a>
    `

    }


    for (var i = 0; i < 3; i++) {
        var span = document.createElement("span")
        span.className = "span"
        ulEl.append(span)
    }
}




// 轮播图

