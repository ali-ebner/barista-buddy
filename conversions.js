var from = prompt("Conversion from: ");
var to = prompt("To: ");

function convert(from,to){
  if(from.toLowerCase()==="grams" && (to.toLowerCase()==="ounces" || to.toLowerCase()==="oz")){
    return from + " grams = " gramstoOz(from) + " oz";
  }

}




function gramstoOz(g){
  return g * 0.04;
}
function ozToGrams(oz){
  return oz * 28.3495;
}
function tbsToGrams(tbs){
  return tbs * 14.3;
}
function gramsToTbs(g){
  return g / 14.3;
}
function fahrenheitToCelcius(temp){
  return (temp-32) * (5/9);
}
function celciusToFahrenheit(temp){
  return temp * (9/5) + 32;
}
