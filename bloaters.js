// Bloaters ==>
// Smell Code #1
class UserReportManager {
  sendUserReport(user) {
    // 1. حساب متوسط تقييمات المستخدم
    let totalScore = 0;
    for (let i = 0; i < user.scores.length; i++) {
      totalScore += user.scores[i];
    }
    let averageScore =
      user.scores.length > 0 ? totalScore / user.scores.length : 0;

    // 2. تحديد حالة حساب المستخدم
    let status = "REGULAR";
    if (averageScore >= 90) {
      status = "EXCELLENT";
    } else if (averageScore >= 75) {
      status = "GOOD";
    }

    // 3. تجهيز وطباعة نص الإيميل
    console.log(`Sending email to ${user.email}...`);
    console.log(
      `Hello ${user.name}, your status is ${status} with average score ${averageScore}.`,
    );
  }
}

// Extract Method
class UserReportManager {
  // 1. دالة حساب المتوسط
  calculateAverageScore(scores) {
    if (!scores || scores.length === 0) return 0;
    const totalScore = scores.reduce((sum, score) => sum + score, 0);
    return totalScore / scores.length;
  }

  // 2. دالة تحديد الحالة (بتاخد المتوسط جاهز عشان ما تحسبوش تاني)
  determineStatus(averageScore) {
    if (averageScore >= 90) return "EXCELLENT";
    if (averageScore >= 75) return "GOOD";
    return "REGULAR";
  }

  // 3. دالة إرسال التقرير
  sendEmail(user, status, averageScore) {
    console.log(`Sending email to ${user.email}...`);
    console.log(
      `Hello ${user.name}, your status is ${status} with average score ${averageScore}.`,
    );
  }

  // 4. الدالة الرئيسية (قيرة وواضحة جداً)
  sendUserReport(user) {
    const averageScore = this.calculateAverageScore(user.scores);
    const status = this.determineStatus(averageScore);
    this.sendEmail(user, status, averageScore);
  }
}

// _______________________________

// Smell Code #2
class Product {
  constructor(
    name,
    price,
    ratingValue,
    ratingCount,
    discountPercentage,
    isDiscountActive,
  ) {
    // بيانات المنتج
    this.name = name;
    this.price = price;

    // بيانات التقييم
    this.ratingValue = ratingValue;
    this.ratingCount = ratingCount;

    // بيانات الخصم
    this.discountPercentage = discountPercentage;
    this.isDiscountActive = isDiscountActive;
  }

  // دالة متعلقة بالتقييم
  getRatingSummary() {
    return `${this.ratingValue} / 5 (${this.ratingCount} reviews)`;
  }

  // دالة متعلقة بالخصم
  getDiscountedPrice() {
    if (this.isDiscountActive) {
      return this.price - this.price * (this.discountPercentage / 100);
    }
    return this.price;
  }
}

// Large Class
class Rating {
  constructor(value, count) {
    this.value = value;
    this.count = count;
  }

  getSummary() {
    return `${this.value} / 5 (${this.count} reviews)`;
  }
}

// 2. كلاس مستقل للخصم
class Discount {
  constructor(percentage, isActive) {
    this.percentage = percentage;
    this.isActive = isActive;
  }

  calculateDiscountedPrice(basePrice) {
    if (this.isActive) {
      return basePrice - basePrice * (this.percentage / 100);
    }
    return basePrice;
  }
}

class Product {
  constructor(name, price, rating, discount) {
    this.name = name;
    this.price = price;
    this.rating = rating; // Instance of Rating
    this.discount = discount; // Instance of Discount
  }

  getRatingSummary() {
    return this.rating.getSummary();
  }

  getFinalPrice() {
    return this.discount.calculateDiscountedPrice(this.price);
  }
}

// _______________________________

//Smell Code #3
class Product {
  constructor(name, amount, currency) {
    // Validation مكرر للمبلغ والعملة
    if (amount < 0) {
      throw new Error("Amount cannot be negative!");
    }
    if (!["USD", "EGP", "EUR"].includes(currency)) {
      throw new Error("Unsupported currency!");
    }

    this.name = name;
    this.amount = amount;
    this.currency = currency;
  }

  // دالة تنسيق السعر
  getFormattedPrice() {
    return `${this.amount} ${this.currency}`;
  }
}

// Primitive Obsession

// 1. Value Object مخصص للمبالغ والعملات (Money)
class Money {
  constructor(amount, currency) {
    if (amount < 0) {
      throw new Error("Amount cannot be negative!");
    }
    if (!["USD", "EGP", "EUR"].includes(currency)) {
      throw new Error("Unsupported currency!");
    }

    this.amount = amount;
    this.currency = currency;
  }

  // دالة تنسيق السعر بقت جوه الكائن الخاص بيها
  format() {
    return `${this.amount} ${this.currency}`;
  }
}

// 2. كلاس Product بيستخدم كائن Money النظيف
class Product {
  constructor(name, priceMoney) {
    this.name = name;
    this.price = priceMoney; // Instance of Money
  }

  getFormattedPrice() {
    return this.price.format();
  }
}

// _______________________________

// Smell Code #4
class JobBoard {
  // قائمة طويلة ومربكة من الـ Parameters!
  createJobPosting(
    title,
    companyName,
    minSalary,
    maxSalary,
    currency,
    location,
  ) {
    console.log(`Job: ${title} at ${companyName}`);
    console.log(`Salary: ${minSalary} - ${maxSalary} ${currency}`);
    console.log(`Location: ${location}`);
  }
}

// Long Parameter List
// Parameter Object بيجمع كل تفاصيل الوظيفة
class JobDetails {
  constructor(title, companyName, minSalary, maxSalary, currency, location) {
    this.title = title;
    this.companyName = companyName;
    this.minSalary = minSalary;
    this.maxSalary = maxSalary;
    this.currency = currency;
    this.location = location;
  }
}

class JobBoard {
  // الدالة بقت بسيطة وبتاخد Parameter واحد نظيف
  createJobPosting(job) {
    console.log(`Job: ${job.title} at ${job.companyName}`);
    console.log(`Salary: ${job.minSalary} - ${job.maxSalary} ${job.currency}`);
    console.log(`Location: ${job.location}`);
  }
}

// الاستخدام النظيف:
const board = new JobBoard();
const newJob = new JobDetails(
  "Software Engineer",
  "Google",
  5000,
  10000,
  "USD",
  "San Francisco, CA",
);

board.createJobPosting(newJob);
// _______________________________

// Smell Code #5
class Customer {
  constructor(name, street, city, zipCode) {
    this.name = name;
    // Data Clump
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  getShippingAddress() {
    return `${this.street}, ${this.city} - ${this.zipCode}`;
  }
}

class Warehouse {
  constructor(warehouseName, street, city, zipCode) {
    this.warehouseName = warehouseName;
    // نفس الـ Data Clump!
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  getLocation() {
    return `${this.street}, ${this.city} - ${this.zipCode}`;
  }
}

// Data Clumps
class Location {
  constructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
  }

  getFormatted() {
    return `${this.street}, ${this.city} - ${this.zipCode}`;
  }
}

class Customer {
  constructor(name, location) {
    this.name = name;
    this.location = location; // Composition
  }

  getShippingAddress() {
    return this.location.getFormatted();
  }
}

class Warehouse {
  constructor(warehouseName, location) {
    this.warehouseName = warehouseName;
    this.location = location; // Composition
  }

  getLocation() {
    return this.location.getFormatted();
  }
}
// _______________________________
