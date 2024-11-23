// 1. الحصول على جميع الأزرار باستخدام querySelectorAll.
const buttons = document.querySelectorAll('button');
const bill = document.getElementById("bill")
const person = document.getElementById("person")
const amountResult = document.getElementById("amount"); 
const totalResult = document.getElementById("total"); 
const errorMessage = document.getElementById("error");

// وظيفة الحساب الرئيسية
function calculateTip(tipPercentage) {
  const billValue = parseFloat(bill.value);
  const personValue = parseInt(person.value, 10);

  // التحقق من صحة المدخلات
  if (!isValidPerson(personValue) || isNaN(billValue)) {
    showError("can't be zero");
    return;
  }

  // إجراء الحسابات
  const totalTip = (billValue * tipPercentage) / 100;
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
function isValidPerson(value) {
  if (value < 1 || isNaN(value)) {
    person.style.border = "1px solid red";
    showError("Number of people must be greater than 0.");
    return false;
  }
  person.style.border = "1px solid green";
  return true;
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
  button.addEventListener('click', (e) => {
    // التحقق من الزر المستهدف
    if (e.target.id === 'reset') {
      clearForm();
      return;
    }

    // استدعاء الحساب عند النقر على زر النسبة
    const tipPercentage = parseFloat(e.target.value);
    calculateTip(tipPercentage);
  });
});

// التحقق من المدخلات عند الكتابة
person.addEventListener("input", () => isValidPerson(parseInt(person.value, 10)));

// وظيفة إعادة التهيئة (التفريغ)
function clearForm() {
  bill.value = "";
  person.value = "";
  amountResult.textContent = "$0.00";
  totalResult.textContent = "$0.00";
  person.style.border = "none";
  hideError();
}

window.addEventListener("DOMContentLoaded", clearForm);

