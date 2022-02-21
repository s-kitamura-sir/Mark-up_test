$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true
});

//チェックボックスが押されている時、Confirmボタンが有効
let consent_chk = document.getElementById("privacy");
let submit_btn = document.getElementById("confirm");
console.log(consent_chk);
consent_chk.addEventListener("click", function () {
  if (consent_chk.checked === true) {
    submit_btn.disabled = false;
    submit_btn.style.background = "#1d4873";
    submit_btn.style.color = "#ffffff";
  } else {
    submit_btn.disabled = true;
    submit_btn.style.background = "#777777";
  }
});
//フォームに入力した内容を表示
//氏名
let inputName = document.getElementById("name");
let upName = document.getElementById("form-name");

inputName.addEventListener("input", function () {
  upName.innerText = inputName.value;
});
//貴社名
let inputCompanyName = document.getElementById("company-name");
let upCompanyName = document.getElementById("form-company-name");

inputCompanyName.addEventListener("input", function () {
  upCompanyName.innerText = inputCompanyName.value;
});
//電話番号
let inputTel = document.getElementById("tel");
let upTel = document.getElementById("form-tel");

inputTel.addEventListener("input", function () {
  upTel.innerText = inputTel.value;
});
//メールアドレス
let inputMail = document.getElementById("mail");
let upMail = document.getElementById("form-mail");

inputMail.addEventListener("input", function () {
  upMail.innerText = inputMail.value;
});
//目的
let putBusinese = document.getElementById("busines");
let upBusines = document.getElementById("form-busines");

putBusinese.addEventListener("input", function () {
  upBusines.innerText = putBusinese.value;
});
//連絡方法
let inputCom = document.getElementById("radio-a");
let upCom = document.getElementById("form-com");

inputCom.addEventListener("input", function () {
  upCom.innerText = inputCom.value;
});
//打ち合わせ希望日
let inputCalender = document.getElementById("calender");
let upCalender = document.getElementById("form-calender");

inputCalender.addEventListener("input", function () {
  upCalender.innerText = inputCalender.value;
});
//本文
let inputText = document.getElementById("textarea");
let upTextarea = document.getElementById("form-textarea");

inputText.addEventListener("textarea", function () {
  upTextarea.innerText = inputText.value;
});
//添付ファイル
let inputFile = document.getElementById("file");
let upFile = document.getElementById("form-file");

inputFile.addEventListener("input", function () {
  upFile.innerText = inputFile.value;
});

let element = document.getElementById("confirm");
element.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let company_name = document.getElementById("company-name").value;
  let tel = document.getElementById("tel").value;
  let mail = document.getElementById("mail").value;
  let busines = document.getElementById("busines").value;
  let radio_a = document.getElementById("radio-a").value;
  let radio_b = document.getElementById("radio-b").value;
  let calender = document.getElementById("calender").value;
  let textarea = document.getElementById("textarea").value;
  let file = document.getElementById("file").value;
  let privacy = document.getElementById("privacy").value;

  let check = 0;
  //氏名が入力されなかった時エラーメッセージを表示
  if (name.length == 0) {
    document.getElementById("name-err").style.display = "block";
    check--;
  } else {
    document.getElementById("name-err").style.display = "none";
    check++;
  }
  //メールが入力されなかった時エラーメッセージ１を表示
  if (mail.length == 0) {
    document.getElementById("mail-err").style.display = "block";
    check--;
  } else {
    document.getElementById("mail-err").style.display = "none";
    check++;
  }
  //本文が入力されなかった時エラーメッセージを表示
  if (textarea.length == 0) {
    document.getElementById("textarea-err").style.display = "block";
    check--;
  } else {
    document.getElementById("textarea-err").style.display = "none";
    check++;
  }
  //1文字以上で始まり、＠が使われていて、３文字以上で終わる
  //メールアドレス　以外が入力された時エラーメッセージ2を表示
  let regexp = /^.+@+.{3,}$/;
  if (regexp.test(mail) != true) {
    document.getElementById("mail-err2").style.display = "block";
    check--;
  }
  if (mail.length == 0 || regexp.test(mail) != false) {
    document.getElementById("mail-err2").style.display = "none";
    check++;
  }
  //*10～11桁の半角数字以外が入力された時エラーメッセージを表示
  let regexp2 = /^([0-9]{10,11})$/;
  if (regexp2.test(tel) != true) {
    document.getElementById("tel-err").style.display = "block";
    check--;
  }
  if (tel.length == 0 || regexp2.test(tel) != false) {
    document.getElementById("tel-err").style.display = "none";
    check++;
  }

  console.log(check);
  //入力内容にエラーがない時、確認画面を表示
  console.log(check);
  if (check >= 4) {
    let form = document.getElementById("modal1");
    modal1.style.display = "block";
  }
  let element2 = document.getElementById("button1");
  element2.addEventListener("click", function () {
    modal1.style.display = "none";
  });
  let element3 = document.getElementById("button2");
  element3.addEventListener("click", function () {
    modal1.style.display = "none";
    modal2.style.display = "block";
  });
  let element4 = document.getElementById("close");
  element4.addEventListener("click", function () {
    modal2.style.display = "none";
  });
});
