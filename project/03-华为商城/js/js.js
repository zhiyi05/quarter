// .展示
var serverURL = "https://res.vmallres.com/pimages"
var ulEl = document.querySelector(".products")
var sectionEl = document.querySelector(".section")

for (var ii = 0; ii < resultList.length; ii++) {
    var resultEl = resultList[ii]
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


var filterEl = []
// button.listener
var btnEls = sectionEl.querySelectorAll(".operation")
for (var i = 1; i < btnEls.length; i++) {
    btnEls[i].onclick = function () {

        this.classList.toggle("active")
        var text = this.textContent.trim()
        if (this.classList.contains("active") && !filterEl.includes(text)) {
            filterEl.push(text)
        } else {
            var index = filterEl.findIndex(function (item) {
                return item === text
            })
            filterEl.splice(index, 1)
        }

    }
}