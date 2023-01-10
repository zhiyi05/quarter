// .展示
var ulEl = document.querySelector(".products")
var serverURL = "https://res.vmallres.com/pimages"


// 2.服务优惠sieve
var discountEls = document.querySelector(".discount")
var disItemEl = discountEls.querySelectorAll(".item")
var filterEls = []
for (var i = 1; i < disItemEl.length; i++) {
    disItemEl[i].onclick = function () {
        this.classList.toggle("active")
        var thisName = this.textContent.trim()
        if (this.classList.contains("active") && (!filterEls.includes(thisName))) {
            filterEls.push(thisName)
        } else {
            var thisNameIndex = filterEls.findIndex(function (item) {
                return item === thisName
            })
            filterEls.splice(thisNameIndex, 1)
        }
        filterResultList()
    }
}

// 3.过滤函数
var showResultList = resultList
function filterResultList() {
    showResultList = resultList.filter(function (item) {
        var isFlag = true
        for (var filterEl of filterEls) {
            if (!item.services.includes(filterEl)) {
                isFlag = false
                break
            }
        }
        return isFlag
    })

    filterResultListAction()
}


filterResultListAction()
function filterResultListAction() {
    ulEl.innerHTML = ""

    for (var i = 0; i < showResultList.length; i++) {
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
    }
}