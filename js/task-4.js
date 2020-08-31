/*this в методах объекта

Расставь отсутствующие this в методах объекта account.

В комментариях показаны операции с объектом и ожидаемые результаты.*/

const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    this.discount = value; // Write code in this line
  },
  showOrders() {
    return this.orders; // Write code in this line
  },
  addOrder(cost, order) {
    this.balance -= cost; // Write code in this line
    this.orders.push(order); // Write code in this line
  },
};
const copyAccount = Object.assign({}, account);
copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы

account.changeDiscount(0.15);
console.log(account.discount); // 0.15

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000

console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']

/*Код должен содержать объект account

Код должен содержать метод changeDiscount объекта account

Код должен содержать метод showOrders объекта account

Код должен содержать метод addOrder объекта account

Вызов метода account.changeDiscount(0.15) сделает значение account.discount равным 0.15

Вызов метода account.showOrders() вернет массив['order-1', 'order-2', 'order-3'] в начальном состоянии объекта.

Вызов метода account.addOrder(5000, 'order-4') сделает значение account.balance равным 19000

Вызов метода account.showOrders() вернет массив['order-1', 'order-2', 'order-3', 'order-4'] после вызова метода newAccount.addOrder(5000, 'order-4')

Ожидается использование 'this.discount' в методе changeDiscount

Ожидается использование 'this.orders' в методе showOrders

Ожидается использование 'this.orders' и this.balance в методе addOrder*/
