// class Cookie {
//   constructor(color) {
//     this.color = color;
//   }

//   getColor() {
//     return this.color;
//   }
//   setColor(color) {
//     this.color = color;
//   }
// }

// const cookie = new Cookie("red");
// cookie.setColor("green");
// console.log(cookie.getColor());
// console.log("______________________");

// const num1 = {
//   num: 11,
// };
// num2 = num1;
// num1.num = 22;
// console.log(num1);
// console.log(num2);

// console.log("______________________");
// let num3 = 122;
// let num4 = num3;
// num3 = 222;
// console.log(num3);
// console.log(num4);

// console.log("______________________");

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// // const NewNode = new Node("me");
// // console.log(NewNode);
// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.head) {
//       const poppedNode = this.head;
//       this.head = this.head.next;
//       if (this.head === null) {
//         this.tail = null;
//       }
//       this.length--;
//       return poppedNode.value;
//     }
//     return this;
//   }
// }

// const NewLinkedList = new LinkedList("4");
// NewLinkedList.push("5");
// NewLinkedList.push("6");
// NewLinkedList.push("7");
// // NewLinkedList.pop();
// NewLinkedList.push("8");
// console.log(JSON.stringify(NewLinkedList, null, 2));

// console.log("______________________");
// //

// function area(r) {
//   return Math.PI * r * r;
// }

// console.log(area(5));

// console.log("______________________");

// const prompt = require("prompt-sync")();

// let sd = (ave = n = a = b = 0);
// let x = [];

// n = Number(prompt("Enter the number of elements: "));

// for (let i = 0; i < n; i++) {
//   x[i] = Number(prompt("Enter the " + (i + 1) + " element: "));
//   ave += x[i];
// }

// ave /= n;

// console.log("The average of the elements is: " + ave);

// function QuickSort(arr) {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     if (arr[i] > pivot) right.push(arr[i]);
//   }
//   return [...QuickSort(left), pivot, ...QuickSort(right)];
// }

// console.log("Test 1:", QuickSort([5, 2, 9, 1, 6, 7]));
// console.log("Test 2:", QuickSort([3, 1, 2]));
// console.log("Test 3:", QuickSort([4, -2, 0, 4, 1]));
// console.log("Test 4:", QuickSort([10]));
// console.log("Test 5:", QuickSort([]));

// function findMax(arr) {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) left.push(arr[i]);
//     if (arr[i] > pivot) right.push(arr[i]);
//   }
//   return [...findMax(left), pivot, ...findMax(right)];
// }

// console.log("Test 1:", findMax([5, 2, 9, 1, 6, 7]));
// console.log("Test 2:", findMax([3, 1, 2]));
// console.log("Test 3:", findMax([4, -2, 0, 4, 1]));
// console.log("Test 4:", findMax([10]));
// console.log("Test 5:", findMax([]));

// const factorial = (n) => {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(4));

// function merge(left, right) {
//   const result = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }
//   return [...result, ...left.slice(i), ...right.slice(j)];
// }

// function MergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   const mid = Math.floor(arr.length / 2);
//   const left = MergeSort(arr.slice(0, mid));
//   const right = MergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// console.log(MergeSort([5, 2, 9, 1, 6, 7]));

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log("HI" + this.name);
//   }
//   static add(a, b) {
//     return a + b;
//   }
// }

// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
// }

// const user1 = new Person("EMMA", 21);
// console.log(user1);
// console.log(MathUtils.add(5, 3));

// class Dog extends Person {
//   constructor(name, age, breed) {
//     super(name, age);
//     this.breed = breed;
//   }
// }

// const dog = new Dog("Doggy", 3, "Labrador");
// console.log(dog);

// class ATM {
//   #balance = 1000;
//   #validatePin(pin) {
//     return pin === 1234;
//   }
//   withdraw(amount, pin) {
//     if (!this.#validatePin(pin)) {
//       throw new Error("Invalid Pin");
//     }
//     if (amount > this.#balance) {
//       throw new Error("Insufficient Funds");
//     }
//     this.#balance -= amount;
//     return `Successfully Withdrawn $${amount}`;
//   }
// }

// const myAtm = new ATM();
// console.log(myAtm.withdraw(500, 1234));

// class Book {
//   #isBorrowed = false;
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
//   borrowBook() {
//     if (this.#isBorrowed) {
//       throw new Error("Book is already borrowed");
//     } else {
//       this.#isBorrowed = true;
//       return `Book ${this.title} borrowed successfully`;
//     }
//   }
//   returnBook() {
//     this.#isBorrowed = false;
//     return `Book ${this.title} returned successfully`;
//   }

//   get isBorrowed() {
//     return `this book is ${this.#isBorrowed ? "" : "not"} borrowed`;
//   }
// }

// const book1 = new Book(
//   "JavaScript: The Good Parts",
//   "Douglas Crockford",
//   "978-0596517742",
// );
// console.log(book1);
// console.log(book1.borrowBook());
// console.log(book1.isBorrowed);
// console.log(book1.returnBook());

// class EBook extends Book {
//   constructor(title, author, isbn, fileSizeMB) {
//     super(title, author, isbn);
//     this.fileSizeMB = fileSizeMB;
//   }
//   borrowBook() {
//     const result = super.borrowBook(); // ينفذ عملية الاستعارة من الـ Class الأب الأول
//     return `${result} | 📥 جاري التحميل بحجم ${this.fileSizeMB}MB`;
//   }
// }

// class Library {
//   static #totalBooksCount = 0;
//   #books = [];
//   addBook(book) {
//     this.#books.push(book);
//     Library.#totalBooksCount++;
//   }
//   static getTotalBooksCount() {
//     return `Total books count: ${Library.#totalBooksCount}`;
//   }
// }

// const book1 = new Book("Clean Code", "Robert C. Martin", "12345");
// const ebook1 = new EBook("You Don't Know JS", "Kyle Simpson", "67890", 15);

// 2. تجربة الاستعارة
// book1.borrowBook(); // ✅ تم استعارة الكتاب
// book1.borrowBook(); // ❌ الكتاب مستعار بالفعل

// ebook1.borrowBook(); // 📥 جاري التحميل (15MB) + ✅ تم الاستعارة

// 3. تجربة الـ Private Field
// console.log(book1.#isBorrowed); // ❌ المفروض يضرب SyntaxError

// 4. إحصائيات المكتبة
// const myLibrary = new Library();
// myLibrary.addBook(book1);
// myLibrary.addBook(ebook1);

// console.log(Library.getTotalBooksCount()); // 📊 المفروض يطبع: 2

// class Person {

// class Book {
//   #isBorrowed = false;

//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }

//   borrowBook() {
//     if (this.#isBorrowed) {
//       throw new Error("Book is already borrowed");
//     } else {
//       this.#isBorrowed = true;
//       return `Book ${this.title} borrowed successfully`;
//     }
//   }

//   returnBook() {
//     this.#isBorrowed = false;
//     return `Book ${this.title} returned successfully`;
//   }

//   get isBorrowed() {
//     return this.#isBorrowed; // يفضل إرجاع boolean مباشر
//   }
// }

// class EBook extends Book {
//   constructor(title, author, isbn, fileSizeMB) {
//     super(title, author, isbn);
//     this.fileSizeMB = fileSizeMB;
//   }

//   // ✅ تطبيق الـ Polymorphism على borrowBook
//   borrowBook() {
//     const message = super.borrowBook();
//     return `${message} | 📥 Ready to download (${this.fileSizeMB} MB)`;
//   }
// }

// class Library {
//   static #totalBooksCount = 0; // ✅ Static Private Field
//   #books = [];

//   addBook(book) {
//     this.#books.push(book);
//     Library.#totalBooksCount++; // ✅ زيادة الكاونتر الثابت
//   }

//   static getTotalBooksCount() {
//     // ✅ Static Public Method
//     return `Total books count: ${Library.#totalBooksCount}`;
//   }
// }

// // 🧪 تجربة الكود المكتمل:
// const book1 = new Book(
//   "JavaScript: The Good Parts",
//   "Douglas Crockford",
//   "978-0596517742",
// );
// const ebook1 = new EBook("You Don't Know JS", "Kyle Simpson", "67890", 15);

// const myLibrary = new Library();
// myLibrary.addBook(book1);
// myLibrary.addBook(ebook1);

// console.log(book1.borrowBook());
// console.log(ebook1.borrowBook());
// console.log(Library.getTotalBooksCount()); // Total books count: 2

// class DigitalWallet {
//   #balance = 0;
//   #pin;
//   #dailyLimit = 5000;
//   #spendToday = 0;

//   constructor(name, initialPin) {
//     this.name = name;

//     // فحص طول الـ PIN في البداية
//     if (typeof initialPin !== "string" || initialPin.length !== 4) {
//       throw new Error("Invalid PIN format");
//     }
//     this.#pin = initialPin;
//   }

//   #validatePin(pin) {
//     return pin === this.#pin;
//   }

//   // الإيداع مش محتاج PIN ولا بيأثر على spendToday
//   deposit(amount) {
//     if (amount <= 0) {
//       return "Amount must be greater than 0";
//     }
//     this.#balance += amount;
//     return `Deposited $${amount}`;
//   }

//   // السحب بياخد الـ pin ويمر بالتحققات الثلاثة
//   pay(amount, pin) {
//     // 1. التحقق من الـ PIN المدخل من بره
//     if (!this.#validatePin(pin)) {
//       return "Invalid PIN";
//     }

//     // 2. التحقق من الرصيد
//     if (amount > this.#balance) {
//       return "Insufficient funds";
//     }

//     // 3. التحقق من الحد اليومي للسحب
//     if (this.#spendToday + amount > this.#dailyLimit) {
//       return "Daily Limit Exceeded";
//     }

//     this.#balance -= amount;
//     this.#spendToday += amount; // زيادة المصروفات اليومية
//     return `Payment successful: $${amount}`;
//   }

//   changePin(oldPin, newPin) {
//     if (!this.#validatePin(oldPin)) {
//       return "Invalid old PIN";
//     }

//     if (typeof newPin !== "string" || newPin.length !== 4) {
//       return "Invalid new PIN format";
//     }

//     this.#pin = newPin;
//     return "PIN changed successfully";
//   }

//   get balance() {
//     return this.#balance;
//   }
// }
// const myWallet = new DigitalWallet("إيمان", "1234");

// // 2. إيداع
// console.log(myWallet.deposit(3000)); // ✅ "Deposit successful"
// console.log(myWallet.balance); // 3000

// // 3. محاولة دفع بـ PIN غلط
// console.log(myWallet.pay(500, "0000")); // ❌ "Invalid PIN"

// // 4. دفع ناجح
// console.log(myWallet.pay(2000, "1234")); // ✅ "Payment successful"
// console.log(myWallet.balance); // 1000

// // 5. محاولة تخطي الحد اليومي
// console.log(myWallet.deposit(10000)); // ✅ "Deposit successful"
// console.log(myWallet.pay(4000, "1234")); // ❌ "Daily Limit Exceeded" (لأن 2000 + 4000 = 6000 وهي أكبر من 5000)

// // 6. تغيير الـ PIN
// console.log(myWallet.changePin("1234", "5678")); // ✅ "PIN changed successfully"
// console.log(myWallet.pay(1000, "5678")); // ✅ "Payment successful"

// // 7. محاولة اختراق الـ Encapsulation من بره
// // console.log(myWallet.#balance); // 💥 المفروض تضرب SyntaxError!

// process.stdout.setEncoding("utf8");

// class Employee {
//   #bonus = 0; // تبدأ بـ 0 تلقائياً

//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   setBonus(amount) {
//     if (amount > 0) {
//       this.#bonus = amount;
//     }
//   }

//   getDetails() {
//     const total = this.salary + this.#bonus;
//     return `الموظف ${this.name} براتب أساسي ${this.salary} ومكافأة ${this.#bonus} (الإجمالي: ${total})`;
//   }
// }

// class Manager extends Employee {
//   constructor(name, salary, department) {
//     super(name, salary); // ممتاز! تمرير صحيح للأب
//     this.department = department;
//   }

//   manageTeam() {
//     return `المدير ${this.name} يدير قسم ${this.department} حالياً.`;
//   }
// }

// // 🧪 تجربة الكود:
// const mgr = new Manager("إيمان", 15000, "تطوير البرمجيات");

// mgr.setBonus(3000);
// console.log(mgr.getDetails());
// // 📊 "الموظف إيمان براتب أساسي 15000 ومكافأة 3000 (الإجمالي: 18000)"

// console.log(mgr.manageTeam());
// // 🏢 "المدير إيمان يدير قسم تطوير البرمجيات حالياً."

// class PaymentMethod {
//   constructor(amount) {
//     this.amount = amount;
//   }
//   processPayment() {
//     return `Processing payment of $${this.amount}`;
//   }
// }

// class CreditCardPayment extends PaymentMethod {
//   constructor(amount, cardNumber) {
//     super(amount);
//     this.cardNumber = cardNumber;
//   }
//   processPayment() {
//     return `Processing credit card payment of $${this.amount} for card number ${this.cardNumber}`;
//   }
// }

// class PayPalPayment extends PaymentMethod {
//   constructor(amount, email) {
//     super(amount);
//     this.email = email;
//   }
//   processPayment() {
//     return `Processing PayPal payment of $${this.amount} for email ${this.email}`;
//   }
// }

// function executePayment(paymentObj) {
//   console.log(paymentObj.processPayment());
// }

// const payments = [
//   new CreditCardPayment(1500, "4111-2222-3333-4444"),
//   new PayPalPayment(800, "eman@example.com"),
//   new PaymentMethod(500),
// ];

// // 2. تطبيق الـ Polymorphism: استدعاء نفس الميثود على أجسام مختلفة
// payments.forEach((payment) => {
//   console.log(payment.processPayment());
// });

// class BookingProcess{
//   constructor(id){
//     this.id = id;
//   }
//   getFee(){
//     return 0;
//   }
// }

// class BookingProcessWithFee extends BookingProcess{
//   getFee(){
//     return 0.02;
//   }
// }

// class BookingProcessTransfer extends BookingProcess{
//   getFee(){
//     return 0.01;
//   }
// }

// class BookingProcessDeposit extends BookingProcess{
//   getFee(){
//     return 0
//   }
// }

// class userDiscount{
//   constrcutor(user , netAmount){
//     this.user = user;
//     this.netAmount = netAmount;
//   }
//   applyDiscount(){
//     if(this.user.balance < this.netAmount){
//     console.log("❌ رصيد غير كافٍ!");
//       return false;
//     }
//     this.user.balance -= this.netAmount;
//   }
// }

// code smells :: ==>
// class BankTransactionProcessor {
//   processTransaction(account, amount, type) {
//     // 1. حساب العمولات بناءً على نوع العملية
//     let fee = 0;
//     if (type === "WITHDRAWAL") {
//       fee = amount * 0.02; // عمولة سحب 2%
//     } else if (type === "TRANSFER") {
//       fee = amount * 0.01; // عمولة تحويل 1%
//     } else if (type === "DEPOSIT") {
//       fee = 0; // الإيداع مجاني
//     }

//     const netAmount = amount + fee;

//     // 2. التحقق من الرصيد والخصم
//     if (account.balance < netAmount) {
//       console.log("❌ رصيد غير كافٍ!");
//       return false;
//     }
//     account.balance -= netAmount;

//     // 3. طباعة التقرير فوراً (Code Smell: Hardcoded Printing)
//     console.log(`[PDF PRINT]: Generating PDF Report for Account ${account.number}...`);
//     console.log(`Transaction: ${type}, Amount: $${amount}, Fee: $${fee}`);

//     // 4. إرسال تنبيه للأمن/المستخدم لو المبلغ كبير (Code Smell: Tight Coupling)
//     if (amount > 10000) {
//       console.log(`[SECURITY ALERT]: High value transaction of $${amount} detected on account ${account.number}!`);
//     }

//     return true;
//   }
// }

// class BookDetails{
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }

//   getDetails() {
//     return `${this.title} by ${this.author}`;
//   }

// }

// class BookSaveToFile {
//   saveToFile(title) {
//     console.log(`Saving ${title} to local file system...`);
//   }

// }

// class BookPrintContentToScreen{
//   printContentToScreen(content) {
//     console.log(`Displaying: ${content}`);
//   }
// }

class AreaCalculatorStrategy {
  calculateArea(shape) {
    return 0;
  }
}
class AreaCalculatorStrategyCircle extends AreaCalculatorStrategy {
  calculateArea(shape) {
    return Math.PI * shape.radius * shape.radius;
  }
}
class AreaCalculatorStrategyRectangle extends AreaCalculatorStrategy {
  calculateArea(shape) {
    return shape.width * shape.height;
  }
}

class shape {
  calculateArea(shape, AreaCalculatorStrategy) {
    return AreaCalculatorStrategy.calculateArea(shape);
  }
}

class AreaCalculator {
  calculateArea(shape) {
    if (shape.type === "CIRCLE") {
      return Math.PI * shape.radius * shape.radius;
    } else if (shape.type === "RECTANGLE") {
      return shape.width * shape.height;
    }
  }
}
