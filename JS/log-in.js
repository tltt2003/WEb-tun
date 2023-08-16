document.getElementById("Welcome-button").onclick = function () {
  console.log(document.getElementById("taikhoan").value);
  if (
    document.getElementById("taikhoan").value == "tuntun2512" &&
    document.getElementById("matkhau").value == "tuntun"
  ) {
    location.href = "https://www.facebook.com/tuntun25122003";
  } else if (
    document.getElementById("taikhoan").value != "tuntun2512" &&
    document.getElementById("matkhau").value != "tuntun"
  ) {
    alert("Wrong password or account.");
  } else if (document.getElementById("taikhoan").value != "tuntun2512") {
    alert("Wrong account.");
  } else if (document.getElementById("matkhau").value != "tuntun") {
    alert("Wrong password.");
  }
};
document.addEventListener("keyup", (e) => {
  var tun = e.key;
  //   console
  if (tun == "Enter") {
    if (
      document.getElementById("taikhoan").value == "tuntun2512" &&
      document.getElementById("matkhau").value == "tuntun"
    ) {
      location.href = "https://www.facebook.com/tuntun25122003";
    } else if (
      document.getElementById("taikhoan").value != "tuntun2512" &&
      document.getElementById("matkhau").value != "tuntun"
    ) {
      alert("Wrong password or account.");
    } else if (document.getElementById("taikhoan").value != "tuntun2512") {
      alert("Wrong account.");
    } else if (document.getElementById("matkhau").value != "tuntun") {
      alert("Wrong password.");
    }
  }
});
