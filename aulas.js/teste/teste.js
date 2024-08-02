var peso = 20
var altura = 1.62
var imcResultado = peso / (altura * altura)
var imcResultado = res

if (imcResultado < 17) {
    var res = ('Abaixo de 17 MUITO ABAIXO DO PESO');
}
else if (imcResultado >= 17 && imcResultado <= 18.49) {
    var res = ('Entre 17 e 18,49 ABAIXO DO PESO');
}
else if (imcResultado >= 18.5 && imcResultado <= 24.99) {
    var res = ('Entre 18,50 e 24,99 PESO NORMAL');
}
else if (imcResultado >= 25 && imcResultado <= 29.99) {
    var res = ('Entre 25 e 29,99 ACIMA DO PESO');
}
else if (imcResultado >= 30 && imcResultado <= 34.99) {
    var res = ('Entre 30 e 34,99 OBESIDADE 1');
}
else if (imcResultado >= 35 && imcResultado <= 39.99) {
    var res = ('Entre 35 e 39,99 OBESIDADE 2');
}
else if (imcResultado >= 40) {
    var res = ('Acima de 40 OBESIDADE 3 MORBIDA');
}
console.log(res);