_Agora que já sabemos o que queremos (`lucroTotal`), podemos descobrir como fazer isso ..._

Vamos aos poucos: se a matriz não tivesse elementos, quanto deveria ser a soma? 0!

```javascript
function lucroTotal0(umPeriodo) {
  var soma = 0;
  return soma;
}
```

E se eu tivesse exatamente um item? Este ... 0 .... mais esse elemento? Exatamente!


```javascript
function lucroTotal1(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  return soma;
}
```

E se eu tivesse 2 elementos?


```javascript
function lucroTotal2(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  return soma ;
}
```

E se eu tivesse 3 elementos?

```javascript
function lucroTotal3(umPeriodo) {
  var soma = 0;
  soma = soma + umPeriodo[0];
  soma = soma + umPeriodo[1];
  soma = soma + umPeriodo[2];
  return soma ;
}
```

> Você começa a ver um padrão? Tente escrever `lucroTotal4` que funciona para 4 itens.


