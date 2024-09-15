function gold(){
const weight = parseFloat(document.getElementById("Weight").value);
const proba = parseFloat(document.getElementById("Proba").value);
const Proba_375 = 84.87
const Proba_500 = 113.17
const Proba_585 = 132.40
const Proba_750 = 169.75
const Proba_900 = 203.70
const Proba_916 = 207.32
const Proba_950 = 215.01
const Proba_958 = 216.82
const Proba_999 = 226.33

 if (proba == 375) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_375).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_375+weight*Proba_375*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_375+weight*Proba_375*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_375+weight*Proba_375*0.3).toFixed(2)
  } else if (proba == 500) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_500).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_500+weight*Proba_500*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_500+weight*Proba_500*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_500+weight*Proba_500*0.3).toFixed(2)    
  } else if (proba == 585) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_585).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_585+weight*Proba_585*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_585+weight*Proba_585*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_585+weight*Proba_585*0.3).toFixed(2)   
  } else if (proba == 750) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_750).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_750+weight*Proba_750*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_750+weight*Proba_750*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_750+weight*Proba_750*0.3).toFixed(2)
  } else if (proba == 900) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_900).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_900+weight*Proba_900*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_900+weight*Proba_900*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_900+weight*Proba_900*0.3).toFixed(2)
  } else if (proba == 916) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_916).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_916+weight*Proba_916*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_916+weight*Proba_916*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_916+weight*Proba_916*0.3).toFixed(2)
  } else if (proba == 950) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_950).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_950+weight*Proba_950*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_950+weight*Proba_950*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_950+weight*Proba_950*0.3).toFixed(2)
  } else if (proba == 958) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_958).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_958+weight*Proba_958*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_958+weight*Proba_958*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_958+weight*Proba_958*0.3).toFixed(2)
  } else if (proba == 999) {
    document.getElementById("100%").textContent = "Сумма под 100% : "+(weight*Proba_999).toFixed(2)
    document.getElementById("110%").textContent = "Сумма под 110% : "+(weight*Proba_999+weight*Proba_999*0.1).toFixed(2)
    document.getElementById("120%").textContent = "Сумма под 120% : "+(weight*Proba_999+weight*Proba_999*0.2).toFixed(2)
    document.getElementById("130%").textContent = "Сумма под 130% : "+(weight*Proba_999+weight*Proba_999*0.3).toFixed(2)
  } else {
    document.getElementById("100%").textContent = "Сумма под 100% : Ошибка"
    document.getElementById("100%").textContent = "Сумма под 100% : Ошибка"
    document.getElementById("100%").textContent = "Сумма под 100% : Ошибка"
    document.getElementById("100%").textContent = "Сумма под 100% : Ошибка"
  }
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    gold();
});