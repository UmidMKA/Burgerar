const product = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kkal: 500,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kkal: 800,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kkal: 1200,
        get Summ() {
            return this.price * this.amount
        },
        get kkalSumm() {
            return this.kkal * this.amount
        }
    },

}

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function (e) {
        e.preventDefault()
        push(this)
    })
}
function push(el) {
    let parent = el.closest(".main__product"),
        parentId = parent.getAttribute('id'),
        num = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price'),
        kkal = parent.querySelector('.main__product-kcall'),
        attribute = el.getAttribute('data-symbol')


    if (attribute == "+" && product[parentId].amount < 10) {
        product[parentId].amount++
    } else if (attribute == "-" && product[parentId].amount > 0) {
        product[parentId].amount--
    }
    num.innerHTML = product[parentId].amount
    price.innerHTML = product[parentId].Summ
    kkal.innerHTML = product[parentId].kkalSumm
}


const addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out'),
    pay = document.querySelector('.receipt__window-btn')
pay.addEventListener('click', () => {
    document.location.reload();
})
addCart.addEventListener('click', () => {
    receipt.style = 'display:flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
        receiptWindow.style = `top:15%`
    }, 500);


    let total = ""
    let title = "  <h1>Purchased : </h1>"
    let totalSumm = 0
    let totalKkal = 0
    const productList = Object.values(product).filter(index => index.amount)

    for (let i = 0; i < productList.length; i++) {
        if (productList[i].amount > 0) {
            total += `
            <div class="receipt_product">
                <span>${i + 1}</span>
                <div class="receipt__name">${productList[i].name}</div>
                <div class="receipt__amount">${productList[i].amount} x ${productList[i].price} = </div>
                <div class="receipt__total">${productList[i].Summ}</div>
            </div>`
            totalSumm += productList[i].Summ
            totalKkal += productList[i].kkalSumm
        }
    }

    receiptWindowOut.innerHTML = title + total + `<h2 class="total">Total Summ = ${totalSumm}</h2>` + `<h2 class="total">Total kkal = ${totalKkal}</h2>`




})

const headerTimer = document.querySelector('.header__timer'),
    timerExtra = document.querySelector('.header__timer-extra')

function random(max, min) {
    return Math.round(Math.random() * (max - min) + min)
}
function color() {
    let r = random(0, 255)
    let g = random(0, 255)
    let b = random(0, 255)
    return `rgb(${r},${g},${b})`
}
function rec() {
    if (timerExtra.innerHTML < 80) {
        timerExtra.innerHTML++
        headerTimer.style.color = color()
        setTimeout(() => {
            rec()
        }, 50);
    } else if (timerExtra.innerHTML < 100) {
        timerExtra.innerHTML++
        headerTimer.style.color = color()
        setTimeout(() => {
            rec()
        }, 150);
    }

}
rec()

const mainProductInfo = document.querySelectorAll('.main__product-info'),
    view = document.querySelector('.view'),
    viewClose = document.querySelector('.view__close'),
    viewImages = document.querySelector('.view img')

for (let i = 0; i < mainProductInfo.length; i++) {
    mainProductInfo[i].addEventListener('dblclick', () => {
        viewImg(mainProductInfo[i])
        view.classList.add('active')

    })
}
function viewImg(el) {
    let img = el.querySelector('.main__product-img'),
        imgAtt = img.getAttribute('src')
    viewImages.setAttribute('src', imgAtt)

}


viewClose.addEventListener('click', () => {
    view.classList.remove('active')
})