function tinhtoanGiaiThua(event) {
  event.preventDefault();
  let number = parseInt(document.getElementById("number").value);
  if (number < 0) {
    document.getElementById("result").innerHTML =
      "Vui lòng nhập một số nguyên không âm.";
    return;
  }
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  document.getElementById("result").innerHTML = `
        <p>Giai thừa của ${number} là: ${factorial}</p>
    `;
}

function tinhtoanLuyThua(event) {
  event.preventDefault();
  let base = parseFloat(document.getElementById("base").value);
  let exponent = parseInt(document.getElementById("exponent").value);
  if (isNaN(base) || isNaN(exponent)) {
    document.getElementById("result").innerHTML =
      "Vui lòng nhập cơ số và số mũ hợp lệ.";
    return;
  }
  let power = Math.pow(base, exponent);
  document.getElementById(
    "result"
  ).innerHTML = `<p>${base} lũy thừa ${exponent} là: ${power}</p>`;
}

function tinhtoan(event) {
  event.preventDefault();
  let a = parseFloat(document.getElementById("Canh1").value);
  let b = parseFloat(document.getElementById("Canh2").value);
  let c = parseFloat(document.getElementById("Canh3").value);
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("result").innerHTML =
      "Đây không phải là một tam giác hợp lệ!";
    return;
  }
  let perimeter = a + b + c;
  let s = perimeter / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  let triangleType = "";

  if (a === b && b === c) {
    triangleType = "Tam giác đều";
  } else if (a === b || b === c || a === c) {
    triangleType = "Tam giác cân";
  } else if (
    Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) ||
    Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) ||
    Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2)
  ) {
    triangleType = "Tam giác vuông";
  } else {
    triangleType = "Tam giác thường";
  }
  document.getElementById("result").innerHTML = `
        <p>Chu vi: ${perimeter.toFixed(2)}</p>
        <p>Diện tích: ${area.toFixed(2)}</p>
        <p>Loại tam giác: ${triangleType}</p>
    `;
}
