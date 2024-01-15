//Вывести из объекта (тут fetch'ем отправить запрос надо)адресс в формате

//'Город: city2 Улица: street2 Дом: house2'.

//Из этого же объекта вывести

//'фамилия personLastName имя personFirstName купил 5 штук товаров name'

fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json')
    .then(response => response.json())
    .then(data => {
            // Создаем строку с адресом
        let city = data.address.city;
        let street = data.address.street;
        let house = data.address.house;
        let addressString = `Город: ${city} Улица: ${street} Дом: ${house}`;
        console.log(addressString);
        // Создаем строку с информацией о покупке
            let last = data.person.lastName;
            let first = data.person.firstName;
            let productName = data.productsOrder.product.name;
            let purchaseString = `Фамилия ${last} Имя ${first} купил 5 штук товаров ${productName}`;
        console.log(purchaseString);
    })
    .catch(error => console.log(error));