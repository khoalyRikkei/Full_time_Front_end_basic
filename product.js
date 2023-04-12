const productList = [
  {
    name: "Nước ép ổi",
    price: 20000,
    imageUrl: "./images/product-1.jpg",
    id: "product-01",
  },

  {
    name: "Trà Đào",
    price: 25000,
    imageUrl: "./images/product-2.jpg",
    id: "product-02",
  },
  {
    name: "Nước trà chanh",
    price: 20000,
    imageUrl: "./images/product-3.jpg",
    id: "product-03",
  },
  {
    name: "Chè dưỡng nhan",
    price: 30000,
    imageUrl: "./images/product-4.jpg",
    id: "product-04",
  },
  {
    name: "Trà hoa cúc",
    price: 20000,
    imageUrl: "./images/product-5.jpg",
    id: "product-05",
  },
];

renderProduct(productList);

// Function có nhiệm vụ là render lại sản phẩm

function renderProduct(data) {
  // B1. Lấy element cần thay đổi
  const tbody = document.querySelector("tbody");

  // B2. Khai báo 1 content để chứa nội dung thay đổi

  let contentTbody = "";

  data.forEach((product, index) => {
    contentTbody += `
       <tr>
            <td>${index + 1}</td>
            <td><img src="${product.imageUrl}" alt="" /></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><button onclick="handleEdit('${
              product.id
            }')">Edit</button><button>Delete</button></td>
          </tr>`;
  });
  tbody.innerHTML = contentTbody;
}

function handleAdd() {
  const valueIdAdd = document.querySelector("#id-product").value;
  const valueImageUrlAdd = document.querySelector("#image").value;
  const valueNameAdd = document.querySelector("#product-name").value;
  const valuePriceAdd = document.querySelector("#price").value;

  let isDulicate = false;

  productList.forEach((product) => {
    if (product.id === valueIdAdd) {
      isDulicate = true;
      //   Kết thúc vòng lặp forEach()
      return;
    }
  });

  //   Kiểm tra ID được tạo có trùng với ID trong dữ liệu hay không, ID không đưọc trống
  if (isDulicate || !valueIdAdd) {
    return alert("ID trùng hoặc trống, vui lòng đặt ID mới!");
  }
  console.log("image", valueImageUrlAdd);
  const newProduct = {
    id: valueIdAdd,
    name: valueNameAdd,
    // Chỉ sử dụng được các ảnh có trong thư mục images
    imageUrl: "./images/" + valueImageUrlAdd.slice(12),
    price: Number(valuePriceAdd),
  };

  //   Thêm sản phẩm vào dataBase
  productList.push(newProduct);

  //   render lại sản phẩm sau khi dataBase được update
  renderProduct(productList);
}

function handleEdit(id) {
  console.log("kiểm tra id", id);
  let productEdit;

  productList.forEach((product) => {
    if (product.id === id) {
      productEdit = product;
      return;
    }
  });

  //   Lấy được element từng edit

  const elementIdEdit = document.querySelector("#id-product-edit");
  const elementImageUrlEdit = document.querySelector("#image-edit");
  const elementNameEdit = document.querySelector("#product-name-edit");
  const elementPriceEdit = document.querySelector("#price-edit");

  //   Gán lại các giá trị trong form edit
  elementIdEdit.value = productEdit.id;
  //   elementImageUrlEdit.value = productEdit.imageUrl;
  elementNameEdit.value = productEdit.name;
  elementPriceEdit.value = productEdit.price;
}
