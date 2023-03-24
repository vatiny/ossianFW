/*

  ! 最後更新：2023/03/24
  * 使用方式：
  ? 第一步：引入這支 JS，放在 </body> 之前。
  ? 第二步：輸入下面的 HTML
  <button id="theme-switcher">切換至深色模式</button>
  ? 第三步：輸入下面的 CSS
  body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    transition: background-color 0.3s ease;
  }

  body.dark-mode {
    background-color: #222;
    color: #fff;
  }

  #theme-switcher {
    margin-top: 20px;
    padding: 10px;
    font-size: 16px;
    border: none;
    background-color: #fff;
    color: #333;
    cursor: pointer;
  }

  #theme-switcher.dark-mode {
    background-color: #333;
    color: #fff;
  }

*/

// 獲取當前時間
var currentTime = new Date().getHours();

// 獲取用戶選擇的主題模式
var theme = localStorage.getItem("theme");

// 如果用戶之前已經選擇過主題模式，則使用用戶之前的選擇
if (theme === "dark") {
  setMode("dark");
} else if (theme === "light") {
  setMode("light");
} else {
  // 如果用戶之前沒有選擇過主題模式，則根據時間自動切換主題模式
  if (currentTime >= 18 || currentTime < 6) {
    setMode("dark");
  } else {
    setMode("light");
  }
}

// 監聽主題切換按鈕的點擊事件
document.getElementById("theme-switcher").addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    // 目前處於深色模式下，點選 ＃theme-switcher 後，則載入 light 模式。
    setMode("light");
    localStorage.setItem("theme", "light");
  } else {
    // 目前處於亮色模式下，點選 ＃theme-switcher 後，則載入 dark 模式。
    setMode("dark");
    localStorage.setItem("theme", "dark");
  }
});

function setMode(n){
  // 設置深色模式
  if(n == "dark"){
    document.body.classList.add("dark-mode");
    document.getElementById("theme-switcher").textContent = "日光閱讀";
  }else{
    // 設置亮色模式
    document.body.classList.remove("dark-mode");
    document.getElementById("theme-switcher").textContent = "暗光閱讀";
  }
}
