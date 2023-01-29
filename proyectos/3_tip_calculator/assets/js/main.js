$(document).ready(function() {
  function updateValues() {

    let tipPercentage;
    if($("#custom").val() === "" ){ 
      tipPercentage = parseFloat($("input[name='tip']:checked").val());
    }else{
      console.log("first")
      tipPercentage = parseFloat($("#custom").val());
    }
    let bill = parseFloat($("#bill").val());
    let people = parseFloat($("#people").val());

    let tipPerson = (bill * tipPercentage / 100) / people;
    let totalPerson = bill / people;
  
    // Use Number.toFixed() method to format the output
    tipPerson = tipPerson.toFixed(2);
    totalPerson = totalPerson % 1 === 0 
      ? totalPerson.toFixed(2) 
      : totalPerson.toFixed(2);
  
    $("#tip").text(tipPerson);
    $("#total").text(totalPerson);
  }


  $("#tips span").click(function() {
    $("input[type='radio']").prop("checked", false);
    $(this).find("input[type='radio']").prop("checked", true);
    $(this).addClass("active-span");
    $(this).siblings().removeClass("active-span");
  
    $("#custom").val("");
    $(this).find("input[type='radio']").trigger("change");
  });

  $("#btn").click(() => {
    $("#people").val(1);
    $("#bill").val(0);
    $("#custom").val("");
  });

  $("form").submit((e) => {
    e.preventDefault();
  });

  $("#bill, #people").on("input", updateValues);
  $("#custom").on("input", (updateValues));
  $("input[type='radio']").change(updateValues);
  updateValues();
});
