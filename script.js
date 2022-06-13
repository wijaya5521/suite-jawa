// define choice of computer
// mendefinisikan pilihan komputer
repeat = true;
while (repeat) {
  var comp = Math.random(),
    suitecomp = "";

  if (comp < 0.34) {
    var suitecomp = "semut";
  } else if (comp > 0.34 && comp < 0.67) {
    var suitecomp = "orang";
  } else {
    var suitecomp = "gajah";
  }

  // define user choice
  // mendefinisikan pilihan user
  var user = prompt(
    "semut = 1\norang = 2\ngajah = 3\n\npilih semut / orang / gajah : "
  );

  if (user == 1) {
    var user = "semut";
  } else if (user == 2) {
    var user = "orang";
  } else if (user == 3) {
    var user = "gajah";
  } else {
    alert("tolong plih salah satu diantara semut / orang / gajah");
  }

  // define result
  // mendefinisikan hasil
  var hasil = "";
  if (suitecomp == user) {
    var hasil = "SERI";
  } else if (user == "semut") {
    var hasil = suitecomp == "gajah" ? "MENANG" : "KALAH";
  } else if (user == "orang") {
    var hasil = suitecomp == "semut" ? "MENANG" : "KALAH";
  } else if (user == "gajah") {
    var hasil = suitecomp == "orang" ? "MENANG" : "KALAH";
  }
  alert(hasil);
  repeat = confirm("Mau Lagi?");
}
