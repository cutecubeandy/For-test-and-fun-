const button = document.querySelector("#helloBtn");
const message = document.querySelector("#message");

button.addEventListener("click", () => {
  message.textContent = "成功：你剛剛讓 JavaScript 在瀏覽器裡執行了。";
});
