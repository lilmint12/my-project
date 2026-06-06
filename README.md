# Tasks List Application

## Giới thiệu

Tasks List là ứng dụng quản lý công việc được xây dựng trong môn Nền tảng Phát triển Web.

Dự án gồm hai phiên bản:

* HTML/CSS/JavaScript thuần
* ReactJS (Vite)

## Công nghệ sử dụng

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript ES6

### React Version

* ReactJS
* Vite

## Chức năng

### Hiển thị danh sách công việc

* Đọc dữ liệu từ file data.json
* Hiển thị danh sách task động

### Thêm công việc mới

* Người dùng có thể nhập tên task
* Task mới được thêm vào danh sách

### Kiểm tra dữ liệu

* Không cho phép bỏ trống tên task
* Tên task tối đa 100 ký tự
* Hiển thị thông báo lỗi khi dữ liệu không hợp lệ

## Cấu trúc thư mục

MY-PROJECT/
├── icons-1.13.1/           # Thư viện icon
├── js/                     # Thư mục chứa file JS bootstrap
├── my-list-todo-app/       # [DỰ ÁN REACT]
│   ├── node_modules/       # Các thư viện phụ thuộc
│   ├── public/             # Assets tĩnh
│   ├── src/                # Mã nguồn React
│   │   ├── assets/         # Hình ảnh/Icons của React
│   │   └── components/     # Các thành phần giao diện
│   │       ├── FormAddToDo.jsx
│   │       ├── Header.jsx
│   │       ├── ToDoItem.jsx
│   │       └── ToDoList.jsx
│   ├── App.css
│   ├── App.jsx             # Component gốc
│   ├── data.json           # Dữ liệu giả lập
│   ├── index.css
│   ├── main.jsx            # Entry point của React
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html          # File HTML gốc cho React
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js      # Cấu hình Vite
├── src/                    # [DỰ ÁN THUẦN - Dùng cho trang đơn]
│   ├── image1.png
│   ├── image2.png
│   └── image3.png
├── data.json               # Dữ liệu cho phiên bản thuần
├── index.html              # Trang chủ HTML thuần
├── README.md
├── script.js               # Logic cho phiên bản thuần
└── style.css               # Style cho phiên bản thuần


## Hướng dẫn chạy phiên bản React

Cài đặt dependencies:

npm install

Khởi động ứng dụng:

npm run dev

Mở trình duyệt tại:

http://localhost:5173

## Hình ảnh minh họa

### Giao diện chính

![Home](./src/image1.png)

### Thêm task mới

![Add Task](./src/image2.png)

### Kiểm tra dữ liệu

![Validation](./src/image3.png)

## Tác giả

TA VIET HIEN

GitHub: https://github.com/lilmint12

Môn học: Nền tảng phát triển Web
