var ulEl = document.querySelector(".products")
for (var i = 0; i < resultList.length; i++) {
    var resultEl = resultList[i]
    var itemEl = document.createElement("li")
    itemEl.className = "item"
    ulEl.append(itemEl)

    var aEl = document.createElement('a')
    aEl.href = "#"
    itemEl.append(aEl)

    var topEl = document.createElement("div")
    topEl.className = "top"
    aEl.append(topEl)

    var imgEl = document.createElement("img")
    imgEl.src = "https://res.vmallres.com/pimages/uomcdn/CN/pms/202207/gbom/6941487272976/800_800_888A5C8BF234C163D91261FB425A9309mp.png"
    imgEl.alt = ""
    imgEl.className = "picture"
    topEl.append(imgEl)

    var bottomEl = document.createElement('div')
    bottomEl.className = "bottom"
    aEl.append(bottomEl)

    var titleEl = document.createElement("div")
    titleEl.className = "title"
    bottomEl.append(titleEl)

    var newArrivalsEl = document.createElement("span")
    newArrivalsEl.className = "NewArrivals"
    newArrivalsEl.textContent = "新品上市"
    titleEl.append(newArrivalsEl)

    var nameEl = document.createElement("span")
    nameEl.textContent = resultEl.name
    titleEl.append(nameEl)

    var summaryEl = document.createElement("div")
    summaryEl.className = "summary"
    summaryEl.textContent = resultEl.skuName
    bottomEl.append(summaryEl)

    var priceEl = document.createElement("div")
    priceEl.className = "price"
    priceEl.textContent = `¥${resultEl.price}`
    bottomEl.append(priceEl)

    var tipsEl = document.createElement("div")
    tipsEl.className = "tips"
    bottomEl.append(tipsEl)

    // var tip1El = document.createElement("div")
    for (var j = 0; j < 3; j++) {
        var tipEl = document.createElement("div")
        tipEl.className = "tip"
        tipEl.textContent = resultEl.services[j]
        tipsEl.append(tipEl)
    }

    var commentEl = document.createElement("div")
    commentEl.className = "comment"
    bottomEl.append(commentEl)

    var spanEl1 = document.createElement("span")
    spanEl1.textContent = `${resultEl.rateCount}人评价`
    commentEl.append(spanEl1)

    var spanEl2 = document.createElement("span")
    spanEl2.textContent = `${resultEl.goodRate}%好评`
    commentEl.append(spanEl2)
}