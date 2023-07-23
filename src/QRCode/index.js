javascript: (function () {
  const script = document.createElement("script");
  script.src =
    "https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js";
  document.head.appendChild(script);

  script.onload = function () {
    const div = document.createElement("div");
    div.id = "qrcode";
    div.style.position = "fixed";
    div.style.top = "50%";
    div.style.left = "50%";
    div.style.transform = "translate(-50%, -50%)";
    div.style.padding = "10px";
    div.style.backgroundColor = "white";
    div.style.zIndex = "99999";
    document.body.appendChild(div);

    const qrCode = new QRCode(div, {
      text: window.location.href,
      width: 128,
      height: 128,
    });
  };
})();
