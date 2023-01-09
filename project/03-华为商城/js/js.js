// .展示
var ulEl = document.querySelector(".products")
var serverURL = "https://res.vmallres.com/pimages"
for (var i = 0; i < resultList.length; i++) {
    var resultEl = resultList[i]

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
    // var itemEl = document.createElement("li")
    // itemEl.className = "item"
    // ulEl.append(itemEl)
    //
    // var aEl = document.createElement('a')
    // aEl.href = "#"
    // itemEl.append(aEl)
    //
    // var topEl = document.createElement("div")
    // topEl.className = "top"
    // aEl.append(topEl)
    //
    // var imgEl = document.createElement("img")
    // imgEl.src = `${serverURL}${resultEl.photoPath}${resultEl.photoName}`
    // imgEl.alt = ""
    // imgEl.className = "picture"
    // topEl.append(imgEl)
    //
    // var bottomEl = document.createElement('div')
    // bottomEl.className = "bottom"
    // aEl.append(bottomEl)
    //
    // var titleEl = document.createElement("div")
    // titleEl.className = "title"
    // bottomEl.append(titleEl)
    //
    // var newArrivalsEl = document.createElement("span")
    // newArrivalsEl.className = "NewArrivals"
    // newArrivalsEl.textContent = "新品上市"
    // titleEl.append(newArrivalsEl)
    //
    // var nameEl = document.createElement("span")
    // nameEl.textContent = resultEl.name
    // titleEl.append(nameEl)
    //
    // var summaryEl = document.createElement("div")
    // summaryEl.className = "summary"
    // summaryEl.textContent = resultEl.skuName
    // bottomEl.append(summaryEl)
    //
    // var priceEl = document.createElement("div")
    // priceEl.className = "price"
    // priceEl.textContent = `¥${resultEl.price}`
    // bottomEl.append(priceEl)
    //
    // var tipsEl = document.createElement("div")
    // tipsEl.className = "tips"
    // bottomEl.append(tipsEl)
    //
    // // var tip1El = document.createElement("div")
    // for (var j = 0; j < 3; j++) {
    //     var tipEl = document.createElement("div")
    //     tipEl.className = "tip"
    //     if (resultEl.services[j]) {
    //         tipEl.textContent = resultEl.services[j]
    //         tipsEl.append(tipEl)
    //     }
    //
    // }
    //
    // var commentEl = document.createElement("div")
    // commentEl.className = "comment"
    // bottomEl.append(commentEl)
    //
    // var spanEl1 = document.createElement("span")
    // spanEl1.textContent = `${resultEl.rateCount}人评价`
    // commentEl.append(spanEl1)
    //
    // var spanEl2 = document.createElement("span")
    // spanEl2.textContent = `${resultEl.goodRate}%好评`
    // commentEl.append(spanEl2)
}


var filter = "仅看有货"
var has = resultList.filter(function (item) {
    if (item.services.includes(filter)) {
        return true
    }
})


// 2.服务优惠sieve
var discountEls = document.querySelector(".discount")
var disItemEl = discountEls.querySelectorAll(".item")
var filterEl = []
for (var i = 1; i < disItemEl.length; i++) {
    disItemEl[i].onclick = function () {
        this.classList.toggle("active")
        var thisName = this.textContent.trim()
        if (this.classList.contains("active") && (!filterEl.includes(thisName))) {
            filterEl.push(thisName)
        } else {
            var thisNameIndex = filterEl.findIndex(function (item){
                return item === thisName
            })
            filterEl.splice(thisNameIndex,1)
        }
    }
}
