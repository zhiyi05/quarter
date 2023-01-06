var books = [{
    id: 1, name: '《算法导论》', date: '2006-09', price: 85.00, count: 3
}, {
    id: 2, name: '《UNIX编程艺术》', date: '2006-02', price: 59.00, count: 2
}, {
    id: 3, name: '《编程珠玑》', date: '2008-10', price: 39.00, count: 5
}, {
    id: 4, name: '《代码大全》', date: '2006-03', price: 128.00, count: 8
}]

var tbodyEl = document.querySelector("tbody")
var priceCountEl = document.querySelector(".price-count")


var price = 0
for (var i = 0; i < books.length; i++) {
    var trEl = document.createElement("tr")
    tbodyEl.append(trEl)

    var book = Object.keys(books[i])
    var foo = book.length + 1
    for (var j = 0; j < foo; j++) {
        var key = book
        var values = Object.values(books[i])

        var tdEl = document.createElement("td")
        var btnEl = document.createElement("button")

        if (key[j] === "price") {
            tdEl.textContent = `￥${values[j]}`
        } else if (key[j] !== undefined) {
            tdEl.textContent = `${values[j]}`
        } else {
            btnEl.textContent = "delete"
            tdEl.append(btnEl)
        }
        trEl.append(tdEl)


        btnEl.onclick = function () {
            var count = this.parentElement.parentElement
            var index = count.sectionRowIndex
            count.remove()

            books.splice(index, 1)

        }
    }


}

for (var x = 0; x < books.length; x++) {
    price += books[x].price * books[x].count
}

priceCountEl.textContent = price




