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
