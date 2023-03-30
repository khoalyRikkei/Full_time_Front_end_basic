// Function - chưa cần hiểu, copy theo
// function nameFunction () {}

// Bài 1
// Tính điểm trung bình của môn Toán, Lý, Hóa và tổng của nó

function bai_1() {
  // Number là method để chuyển đổi giá trị trong nó từ String sang dạng Number
  const mathMark = Number(prompt("Vui lòng nhập điểm toán"));
  const chemMark = Number(prompt("Vui lòng nhập điểm Hóa"));
  const physMark = Number(prompt("Vui lòng nhập điểm Vật lý"));
  const averageMark = (mathMark + chemMark + physMark) / 3;
  console.log("Điểm trung bình 3 môn là:", averageMark);
  console.log("Tổng điểm 3 môn là:", averageMark * 3);
}

// Chuyển đổi độ C sang độ F
function bai_2() {
  // prompt() là method giúp lấy giá trị người dùng nhập vào
  const C = prompt("Vui lòng nhập vào độ C");
  const F = (C * 9) / 5 + 32;
  console.log(C + " độ C bằng " + F + " độ F");
}

// Tính diện tích hình tròn
function bai_3() {
  const r = prompt("Nhập vào bán kính hình tròn");
  const PI = 3.14;
  //   r** là r*r
  const S = PI * r * r;

  //   method làm tròn:  toFixed()
  console.log("Diện tích hình tròn là: ", S.toFixed(2));
}

// Tính chu vi hình tròn
function bai_4() {
  const r = prompt("Nhập vào bán kính hình tròn");
  const PI = 3.14;
  //   r** là r*r
  const C = 2 * PI * r;

  //   method làm tròn:  toFixed()
  console.log("Chu vi hình tròn là: ", C.toFixed(4));
}

// Bài 2 - Chuyển đổi tiền tệ

console.log("Kiểm tra document", document);

function convertCurrency() {
  const amount = document.getElementById("amount").value;
  console.log("Kiểm tra amount", amount);

  const currency = document.getElementById("currency");

  console.log("Kiểm tra from currency", currency.value);

  const result = document.getElementById("result");

  if (currency.value == "USD") {
    // toLocaleString('en-GB) --> method format String
    result.value = (amount * 23000).toLocaleString("en-GB");
  } else {
    result.value = (amount / 23000).toFixed(2);
  }
}

function onChange() {
  const currency = document.getElementById("currency");

  const toCurrency = document.getElementById("to-currency");

  if (currency.value == "USD") {
    toCurrency.value = "VNĐ";
  } else {
    toCurrency.value = "USD";
  }
}
