- Tạo tài khoản github
- Tạo repositories

Các bước đẩy source code lên git

1. Khởi tạo git trong thư mục: git init
2. Kiểm tra thông tin: git status
3. Tạo track (thêm các file vào sẵn sàng commit): git add .
4. Kiểm tra thông tin: git status
5. Commit git: git commit -m "<noi dung commit>" // git commit -m "update file"

<!-- Hoàn thành commit lên -->

6. Liên kết với repo: git remote add origin <link repo>
7. Tạo branch: git checkout -b <ten_branch> // git checkout -b session_01
8. Đẩy source lên repo: git push --set-upstream origin <ten_branch> // git push --set-upstream origin session_01

<!-- Xóa link repo hiện tại-->

git remote rm origin
