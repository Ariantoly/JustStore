$(document).ready(function(){
  $("#navbar").load("nav.html");
  $('.productList').load("getProduct.php");
});

$('#addProduct').click(function(){
  window.location.replace('addProduct.html')
})
