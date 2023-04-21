const products = [
  { id: 1, name: "Ngũ cốc dinh dưỡng", price: 65000, unit: "gói" },
  { id: 2, name: "Sữa tươi", price: 35000, unit: "hộp" },
  { id: 3, name: "Cá viên chiên", price: 35000, unit: "gói" },
  { id: 4, name: "Sữa chua", price: 28000, unit: "lốc" },
  { id: 5, name: "Xúc xích", price: 65000, unit: "gói" },
  { id: 6, name: "Chả lụa ", price: 85000, unit: "đòn" },
  { id: 7, name: "Ngũ cốc dinh dưỡng", price: 65000, unit: "gói" },
  { id: 8, name: "Ngũ cốc dinh dưỡng", price: 65000, unit: "gói" },
  { id: 9, name: "Ngũ cốc dinh dưỡng", price: 65000, unit: "gói" },
  { id: 10, name: "Ngũ cốc dinh dưỡng", price: 65000, unit: "gói" },
];

const productsLocal = JSON.parse(localStorage.getItem("productList"));
if (!productsLocal) {
  localStorage.setItem("productList", JSON.stringify(products));
}
