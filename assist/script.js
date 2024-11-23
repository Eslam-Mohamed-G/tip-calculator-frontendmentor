// 1. الحصول على جميع الأزرار باستخدام querySelectorAll.
const buttons = document.querySelectorAll('button');
const bill = document.getElementById("bill").value
const person = document.getElementById("person").value

// 2. إنشاء وظيفة مستقلة للتعامل مع حدث النقر.
const handleClick = (e) => {
  const num = e.target.value;
  const total = (bill * num) / 100;
  const amount = total / person
  console.log(amount);
  console.log(total);
};

// 4. إضافة مستمع الحدث (Event Listener) لكل زر باستخدام forEach.
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});


