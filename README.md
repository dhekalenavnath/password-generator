# 🔐 Random Password Generator

A simple and secure password generator built using **HTML, CSS, and JavaScript**.
It generates strong random passwords and allows quick copying with improved security features.

---

## 🚀 Features

* 🔢 Adjustable password length using slider
* 🔐 Generates **2 random passwords** at once
* 📋 Click to copy password to clipboard
* 🛡️ Masked password display when copied
* ⏳ Copy message auto-disappears after 2 seconds
* ⚡ Fast and lightweight (no external libraries)

---

## 🧠 How It Works

* A predefined character set (A–Z, a–z, 0–9, symbols) is used
* Random characters are selected using `Math.random()`
* Password is built based on selected length
* Clicking password copies it to clipboard
* Display message shows masked password (for security)

---

## 📂 Project Structure

```
📁 Password-Generator
 ├── index.html
 ├── style.css
 ├── script.js
 └── README.md
```

---

## 🛠️ Usage

1. Clone the repository:

```bash
git clone https://github.com/your-username/password-generator.git
```

2. Open `index.html` in your browser

3. Adjust password length using slider

4. Click **Generate Password**

5. Click any password to copy it

---

## 🔒 Security Improvements

* Password is **masked when copied**
  Example: `Ab****34` instead of full password

* Copy message disappears automatically
  → Prevents shoulder surfing attacks

---

## ⚠️ Limitations

* Uses `Math.random()` (not cryptographically secure)
* No password strength indicator
* No custom character selection

---

## 💡 Future Improvements

* 🔥 Use `crypto.getRandomValues()` for better security
* 📊 Add password strength meter
* 🎨 Improve UI with animations
* 🌙 Dark mode support
* 📱 Fully responsive design

---

## 👨‍💻 Author

**Navnath Dhekale**
© 2025 All rights reserved.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
