// الحصول على المراجع الأساسية
const buttons = document.querySelectorAll('button');
const bill = document.getElementById("bill");
const person = document.getElementById("person");
const custom = document.getElementById("custom");
const amountResult = document.getElementById("amount");
const totalResult = document.getElementById("total");
const errorMessage = document.getElementById("error");
const message = document.getElementById("error-message")

// وظيفة الحساب الرئيسية
function calculateTip(tipPercentage) {
  const billValue = parseFloat(bill.value);
  const personValue = parseInt(person.value, 10);
  

  // التحقق من صحة المدخلات
  if (!isValidPerson() || !isValidBill()) {
    showError("Check your inputs.");
    return;
  }

  // إجراء الحسابات
  const totalTip = billValue * tipPercentage / 100;
  const tipPerPerson = totalTip / personValue;

  // تحديث النتائج
  updateResults(tipPerPerson, totalTip);
}

// تحديث النتائج في واجهة المستخدم
function updateResults(amount, total) {
  amountResult.textContent = `$${amount.toFixed(2)}`;
  totalResult.textContent = `$${total.toFixed(2)}`;
  hideError();
}

// التحقق من صحة عدد الأشخاص
function isValidPerson() {
  const personValue = parseInt(person.value, 10);

  if (isNaN(personValue) || personValue < 1) {
    person.style.border = "1px solid red";
    showError("can't be zero or empty.");
    return false;
  } else {
    person.style.border = "1px solid green";
    hideError();
    return true;
  }
}

// التحقق من صحة قيمة الفاتورة
function isValidBill() {
  const billValue = parseFloat(bill.value);

  if (isNaN(billValue) || billValue <= 0) {
    bill.style.border = "1px solid red";
    return false;
  } else {
    bill.style.border = "1px solid green";
    errorMessage.style.display = "none";
    return true;
  }
}

// عرض رسالة الخطأ
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

// إخفاء رسالة الخطأ
function hideError() {
  errorMessage.style.display = "none";
}

// إضافة مستمعات الأحداث للأزرار
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // التحقق من الزر المستهدف
    if (e.target.id === "reset") {
      clearForm();
      return;
    }
    custom.value = "";
    // استدعاء الحساب عند النقر على زر النسبة
    const tipPercentage = parseFloat(e.target.value);
    calculateTip(tipPercentage);
  });
});

// التعامل مع الإدخال المخصص
function customInp() {
  const customValue = parseFloat(custom.value);
  const billValue = parseFloat(bill.value);
  const personValue = parseInt(person.value, 10);

  // التحقق من صحة القيم
  if (isNaN(customValue) || customValue <= 0) {
    showError("Enter a valid custom percentage.");
    return;
  }
  if (!isValidBill() || !isValidPerson()) {
    return;
  }

  // إجراء الحسابات
  const totalTip = (billValue * customValue) / 100;
  const tipPerPerson = totalTip / personValue;

  // تحديث النتائج
  updateResults(tipPerPerson, totalTip);
}
custom.addEventListener("input", customInp)

// التحقق من المدخلات عند الكتابة
bill.addEventListener("input", isValidBill);
person.addEventListener("input", isValidPerson);

// وظيفة إعادة التهيئة (التفريغ)
function clearForm() {
  bill.value = "";
  person.value = "";
  custom.value ="";
  amountResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
  bill.style.border = "none";
  person.style.border = "none";
  hideError();
}

// عند تحميل الصفحة
window.addEventListener("DOMContentLoaded", clearForm);


