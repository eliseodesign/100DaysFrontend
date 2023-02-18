import createPassword from "./algorimth.js"

$("#n-len").text($("#length").val())

$("#length").on("input",function(){
  $("#n-len").text($(this).val())
  generate()
})

$("#generate").click(function(){
  generate()
  console.log($("#in_upp"))
  console.log("Valor del input range:", $("#length").val());


})

function generate() {
  var password = createPassword(
    $("#length").val(), 
    $("#in_upp").is(":checked"), 
    $("#in_num").is(":checked"), 
    $("#in_sym").is(":checked"));

  $("#password").text(password);

  // Calcular la fortaleza de la contraseña
  let strength = 0;
    if (password.length < 8) {
      strength = 0;
    } else {
    if (/[a-z]/.test(password)) {
      strength += 1;
    }
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }
    if (/[0-9]/.test(password)) {
      strength += 1;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      strength += 1;
    }
  }

  // Agregar las clases correspondientes
  $("#strength").removeClass().addClass("strength-" + strength);
}
