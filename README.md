# Vue 3 + Vite
```text
QLNhaTroFE/
│
├── node_modules/               # 📦 Thư viện cài bằng npm
├── public/                     # 📂 File tĩnh (favicon, robots.txt, ảnh logo...)
│   └── favicon.ico
│
├── src/                        # 📂 Code chính của ứng dụng
│   ├── api/                    # 📂 Chứa các hàm gọi API (axios/fetch)
│   │   └── userApi.js
│   │
│   ├── assets/                 # 📂 Ảnh, CSS, font...
│   │   └── logo.png
│   │
│   ├── components/             # 📂 Component tái sử dụng nhỏ (Button.vue, Card.vue)
│   │   └── BaseButton.vue
│   │
│   ├── layouts/                # 📂 Layout chung (MainLayout.vue, AuthLayout.vue)
│   │   └── MainLayout.vue
│   │
│   ├── router/                 # 📂 Định nghĩa routes cho Vue Router
│   │   └── index.js
│   │
│   ├── store/                  # 📂 State management (Pinia hoặc Vuex)
│   │   └── userStore.js
│   │
│   ├── views/                  # 📂 Các trang lớn (page)
│   │   ├── Home.vue
│   │   ├── Login.vue
│   │   └── Dashboard.vue
│   │
│   ├── utils/                  # 📂 Helper function, constant
│   │   └── formatDate.js
│   │
│   ├── App.vue                 # 📄 Component gốc
│   ├── main.js                 # 📄 Điểm khởi động app
│   └── style.css               # 📄 CSS global
│
├── index.html                  # 📄 HTML gốc
├── package.json                # 📦 Config project, dependency
├── vite.config.js              # ⚙️ Config Vite
└── README.md
```
