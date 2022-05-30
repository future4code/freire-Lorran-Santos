# Prática de JS

```JS
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salario = 2000.00;
 for(let i = 0; i < qtdeCarrosVendidos; i++) {
   let porcentagem = valorTotalVendas * 0.05;
   let somaCem = qtdeCarrosVendidos * 100;
   let soma = salario + porcentagem + somaCem;
   if (qtdeCarrosVendidos === 0) {
     return salario
   } else {
     return soma;
   }
 }
 return salario
}
```
