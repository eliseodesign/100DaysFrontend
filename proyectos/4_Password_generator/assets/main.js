import createPassword from "./algorithm.js"

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

  $("#password").val(password);

  // Calcular la fortaleza de la contraseña
  let strength = 1;
    if (password.length < 8) {
      strength = 1;
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

  let spans = $("#strength div span")
  
  $("#strength div span").removeClass()
  
  for(let i = 0; i < strength; i++){
    $(spans[i]).addClass("strength-" + strength);
  }

}
