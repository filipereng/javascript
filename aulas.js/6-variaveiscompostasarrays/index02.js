let valores = [8, 7, 4, 2, 9]

/*for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
// SIMPLIFICANDO (FOR) PARA (FOR IN)*/

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
