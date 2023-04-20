function handleSubmit() {
  // B1. Lấy data từ form và local

  const data = JSON.parse(localStorage.getItem("users")) || [];
  const userForm = getFormInput();

  // B2. Validator dữ liệu
  const erorr = validator(userForm);
  //   B2.1 Nếu lỗi thì hiển thị lỗi
  if (erorr.isError) {
    renderError(erorr);
  }

  // B3. Kiểm tra trùng lặp dữ liệu
  let isDulicate = false;
  data.forEach((user) => {
    if (user.email === userForm.email) {
      isDulicate = true;
    }
  });

  //   B3.1 Nếu trùng lặp thì hiển thị lỗi, nếu không đẩy dữ liệu lên localStorage
  if (!isDulicate) {
    data.push(userForm);
    localStorage.setItem("users", JSON.stringify(data));
  } else {
    const erorr = {
      isError: true,
      msg: "Trùng email",
    };
    renderError(erorr);
  }
}

// Lấy giá trị Form --> Object
function getFormInput() {}

// Hiển thị lỗi -->
function renderError(error) {}

// object chứa lỗi và thông tin lỗi
function validator(data) {}
