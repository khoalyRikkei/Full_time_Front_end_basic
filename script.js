function testBai1() {
  const valueInput = document.querySelector("#input-bai-1").value;
  const convertInput = valueInput.split(",");
  const resultInput = document.querySelector("#result-bai-1");
  const result2Input = document.querySelector("#result-2-bai-1");
  //
  console.log("Mảng đã chuyển", convertInput);
  let result = "";
  let count = 0;
  for (const number of convertInput) {
    console.log(NaN > 10, NaN < 20);

    // Kiểm tra phần tử là số và lớn hơn 10
    if (Number(number) >= 10) {
      // Đếm số phần tử >= 10
      count++;
      //   Hiển thị số phần tử
      result += number + "  ";
      console.log(result);
    }
  }

  resultInput.value = result;
  result2Input.innerHTML = "Số lượng số lớn hơn 10 là: " + count;
}

function testBai2() {
  const valueInput = document.querySelector("#input-bai-2").value;
  const convertInput = valueInput.split(",");
  const resultInput = document.querySelector("#result-bai-2");
  const result2Input = document.querySelector("#result-2-bai-2");

  let max = convertInput[0];
  let index;
  for (let i = 1; i < convertInput.length; i++) {
    if (Number(convertInput[i]) > max) {
      //   Hiển thị số phần tử
      max = convertInput[i];
      index = i;
    }
  }
  resultInput.value = max;
  result2Input.innerHTML = "Phần tử max tại vị trí " + (index + 1);
}

function testBai3() {
  const valueInput = document.querySelector("#input-bai-3").value;
  const convertInput = valueInput.split(",");
  const resultInput = document.querySelector("#result-bai-3");
  const result2Input = document.querySelector("#result-2-bai-3");
  let sum = 0;
  for (const number of convertInput) {
    sum += Number(number);
  }
  resultInput.value = sum;
  result2Input.innerHTML = "Trung bình cộng " + sum / convertInput.length;
}

function testBai4() {
  const valueInput = document.querySelector("#input-bai-4").value;
  const convertInput = valueInput.split("");
  const resultInput = document.querySelector("#result-bai-4");
  let reverseInput = "";
  for (let i = convertInput.length - 1; i >= 0; i--) {
    reverseInput += convertInput[i];
  }
  resultInput.value = reverseInput;
}

function testBai9() {
  const a = [1, 2, 3, 4];
  const b = [5, 6, 7, 8];
  const c = a;
  for (const item of b) {
    c.push(item);
  }
  const d = [...a];
  a[2] = 10;

  console.log("Kiểm tra c", c);
  console.log("Kiểm tra d", d);
}
testBai9();

/**
 * Tổng hợp kiến thức của Array:
 *
 * - Giá trị của phần tử (element)
 * - Vị trí của phần tử (index)
 * @create
 * - array.push(item) --> thêm mới item vào vị trí cuối array và trả về chiều dài của mảng
 * - array.unshift(item) --> Thêm mới item vào đầu array và trả về chiều dài của array
 * - new Array()
 * @read
 * - array[i] --> Hiển thị phần tử thứ i trong array
 * - For of --> lấy được giá trị từng phần tử
 * - For in --> lấy được vị trí từng phần tử
 * @update
 * - array[i] = X --> gán phần tử tứ i trong array bằng X
 * -
 *
 * @delete
 * - array.pop() --> xóa phần tử cuối của array và trả về giá trị phần tử được xóa
 * - array.shift() --> xóa giá trị đầu của array và trả về giá trị phần tử bị xóa
 *
 *
 * Một số method thông dụng
 *
 * array.map() --> lặp qua từng phần tử và trả về một mảng mới có chiều dài bằng chiều dài mảng ban đầu
 * array.forEach() --> lặp qua từng phần tử trong mảng
 * array.filter() --> so sánh từng phần tử trong mảng và trả về mảng mới có phần tử thỏa điều kiện
 * array.find() --> Tìm phần tử thỏa điều kiện và trả về phần tử đầu tiên
 * array.findIndex() --> trả về vị trí phần tử thỏa điều kiên
 * array.sort() --> sắp xếp phần tử
 * array.includes() --> tìm kiếm phần tử trong mảng thỏa điều kiện và trả về boolean
 *
 *
 */

const pets = ["cat", "dog", "pig"];

const sloganPet = pets.map((pet, i) => {
  console.log(pet);
  return pet + " dễ thương" + " tại index thứ " + i;
});
console.log(sloganPet);

const testForEach = pets.forEach((item, index) => {
  console.log(item + " ăn cỏ");
});

console.log("Kiểm tra test forEach", testForEach);

const dataInput = [];
function handleAdd() {
  const valueInput = document.querySelector("#input-bai-21").value;
  // Dữ liệu là string
  console.log("Kiểm tra value", valueInput);

  //   Method split() chuyển đổi string thành array

  const converArray = valueInput.split(" ");

  //   Thêm dữ liệu vào array data
  dataInput.push(converArray);
  console.log("Kiểm tra data", dataInput);
  renderData(dataInput);
}
const newArr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
];
renderData(newArr);
function renderData(data) {
  const myTable = document.querySelector("#my-table");
  let contentTable = "";

  for (let row = 0; row < data.length; row++) {
    contentTable += "<tr>";

    for (let col = 0; col < data[0].length; col++) {
      contentTable += `<td>${data[row][col]}</td>`;
    }
    contentTable += "</tr>";
  }
  myTable.innerHTML = contentTable;
}
