// B1. Lấy dữ liệu về
const reviews = JSON.parse(localStorage.getItem("reviews")) ?? [];
// B2. Lấy được tất cả elemet là input và là child của #rating
const inputElements = document.querySelectorAll("#rating input");

// Lắng nghe sự kiện của từng element input
inputElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    // Bắt kì element click sẽ gọi function handleClick()
    handlClick(e);
  });
});

const review = {
  mark: "",
  content: "",
};
function handlClick(event) {
  // Tìm tất cả phần tử để xóa bỏ  class active element có
  inputElements.forEach((element) => {
    element.classList.remove("active");
  });

  // Thêm class active vào element muốn chọn
  event.target.classList.add("active");

  // Chuyển value
  review.mark = event.target.value;
}

// CREATE review
function handleSend() {
  console.log(111111111111);
  const reviewContentValue = document.querySelector("#review_content").value;
  review.content = reviewContentValue;

  const isError = validate(review);
  if (isError) {
    alert("Phải chọn điểm và viết nội dung");
    return;
  }
  //   Lấy dữ liệu từ localStorage:
  const reviews = JSON.parse(localStorage.getItem("reviews")) ?? [];

  // Đẩy dữ liệu lên
  reviews.push(review);
  localStorage.setItem("reviews", JSON.stringify(reviews));
  renderReviews(reviews);
}

// READ review
renderReviews(reviews);
function renderReviews(data) {
  const listReviewElement = document.querySelector("#list_review");

  //   Hiển thị số lượng review
  const viewNumberElement = document.querySelector("#view_number");

  viewNumberElement.innerHTML = data.length;

  //   Hiển thị điểm trung bình

  const averageElement = document.querySelector("#average_rate");

  const totalMark = data.reduce(
    (pre, element) => pre + Number(element.mark),
    0
  );
  console.log(totalMark);
  averageElement.innerHTML = (
    totalMark / (data.length > 0 ? data.length : 1)
  ).toFixed(1);

  let contentReview = "";
  data.forEach((review, index) => {
    contentReview += `
        <li class="review_item">
          <span class="rate">${review.mark}</span>
          ${review.content}
          <div class="edit_remove">
            <button class="edit" onclick="handleEdit(this, id)">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="remove" onclick="handleDeleteReview('${index}')">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </li>`;
  });

  listReviewElement.innerHTML = contentReview;
}

function handleDeleteReview(indexElement) {
  console.log(indexElement);
  const reviews = JSON.parse(localStorage.getItem("reviews")) ?? [];
  reviews.forEach((review, index) => {
    if (index == indexElement) {
      reviews.splice(index, 1);
    }
  });
  localStorage.setItem("reviews", JSON.stringify(reviews));
  renderReviews(reviews);
}

function validate(value) {
  return !value.mark || !value.content;
}
