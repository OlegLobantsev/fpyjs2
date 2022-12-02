const goods = {    
    1: {
        id: 1,
        name: 'Джинсы',
        description: 'Порезаны ветром',
        sizes: [32, 34, 36],
        price: 2300,
        available: true,
    },
    2: {
        id: 2,
        name: 'Кеды',
        description: 'Со звездами',
        sizes: [37, 41, 45],
        price: 5200,
        available: true,
    },
    3: {
        id: 3,
        name: 'Футболка',
        description: 'Белая',
        sizes: [44, 46, 48],
        price: 1200,
        available: true,
    },
    4: {
        id: 4,
        name: 'Сумка',
        description: 'Кожа',
        sizes: [40, 41, 42],
        price: 3850,
        available: false,
    },
    5: {
        id: 5,
        name: 'Носки',
        description: 'Черные',
        sizes: [37, 41, 45],
        price: 500,
        available: false,
    }
}

const basket = [
    {
        goodId: 1,
        size: 32,
        amount: 2,  
    },
    {
        goodId: 2,
        size: 41,
        amount: 1,  
    },
]

function addInBasket(addId, addSize, addAmount) {
    if (goods[addId].available === false) {
        return `Позиция ${goods[addId].name} отсутствует и не будет добавлена в корзину.`;
    } else if (basket.length === 0) {
        basket.push({ goodId: addId, size: addSize, amount: addAmount });
        return `Позиция ${goods[addId].name}, ${goods[addId].sizes[addSize]} в количестве ${addAmount} шт. успешно добавлена в корзину.`;
    } else {
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].goodId === addId && basket[i].size === addSize) {
                basket[i].amount = basket[i].amount + addAmount;
                return `Позиция ${goods[addId].name}, ${goods[addId].sizes[addSize]}  в количестве ${addAmount} шт. успешно добавлена в корзину.`;
            } else {
                basket.push({ goodId: addId, size: addSize, amount: addAmount });
                return `Позиция ${goods[addId].name}, ${goods[addId].sizes[addSize]} в количестве ${addAmount} шт. успешно добавлена в корзину.`;
            };
        }
    };
};

function delFromBasket(delId, delSize, delAmount) {
    for (let i = 0; i < basket.length; i++) {
        if (basket[i].goodId === delId && basket[i].size === delSize) {
            basket[i].amount = basket[i].amount - delAmount;
            return `Позиция ${goods[delId].name}, ${goods[delId].sizes[delSize]} в количестве ${delAmount} шт. была удален из корзины.`;
        };
    }
};

function clearBasket() {
    basket.length = 0;
    return 'Корзина очищена.'
}

function contentsBasket() {
    totalAmount = 0;
    totalSumm = 0;
    basket.forEach((elem) => {
        totalAmount += elem.amount
        totalSumm += goods[elem.goodId].price * elem.amount;
    });
    return `В корзине ${totalAmount} позиций на сумму ${totalSumm}`
}



console.log(addInBasket(1, 2, 1));
console.log(addInBasket(3, 1, 1));
console.log(addInBasket(2, 2, 1));
console.log(addInBasket(4, 2, 1));
console.log(delFromBasket(1, 2, 1));
console.log(contentsBasket());
console.log(clearBasket());
