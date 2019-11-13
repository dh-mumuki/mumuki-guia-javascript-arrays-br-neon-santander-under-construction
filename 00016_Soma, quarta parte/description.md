Então temos que repetir a operação de acumulação várias vezes, uma para cada elemento do array. Isso não só nos deixa desarrumados, mas também muito repetitivos!

Não havia uma estrutura que vimos anteriormente que nos permitisse repetir uma ação várias vezes?

Sim, é o `for`!

E como posso pedir que ele repita essa ação dinamicamente para todos os elementos?

Perguntando o `length` para o array!

Exemplo:

```javascript
function lucroTotal(umPeriodo) {
  var soma= 0;
  var mes = 0;
  for (var i=0; i<umPeriodo.length; i++) {
	mes = umPeriodo[i];
	soma= soma+ mes;
  }
  return soma;
}
```



> Ainda não está convencido? Novamente, tente as seguintes expressões no console:
>
> * `lucroTotal([])`
> * `lucroTotal([100])`
> * `lucroTotal([100, 2])`
> * `lucroTotal([2, 10, -20])`
> * `lucroTotal([2, 10, -20, 0, 0, 10, 10])`
