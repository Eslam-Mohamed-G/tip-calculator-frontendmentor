// 1. الحصول على جميع الأزرار باستخدام querySelectorAll.
const buttons = document.querySelectorAll('button');
const bill = document.getElementById("bill")
const person = document.getElementById("person")
const amountResult = document.getElementById("amount"); 
const totalResult = document.getElementById("total"); 

// 2. إنشاء وظيفة مستقلة للتعامل مع حدث النقر.
const handleClick = (e) => {
  const num = e.target.value;
  const billValue = bill.value
  const personValue = person.value
  const total = (billValue * num) / 100;
  const amount = total / personValue
  if (e.target.id === 'reset') {
    clear(); // استدعاء الدالة المخصصة للتفريغ
    return; // الخروج من الوظيفة
  }
  amountResult.textContent = `$${amount}`;
  totalResult.textContent = `$${total}`;
  console.log(amount);
  console.log(total);
};

// 4. إضافة مستمع الحدث (Event Listener) لكل زر باستخدام forEach.
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

function clear(){
  bill.value = "";
  person.value = "";
  amountResult.textContent = "$0.0"
  totalResult.textContent = "$0.0"
}


