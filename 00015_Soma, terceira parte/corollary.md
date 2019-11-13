:clap:  Bem feito!

E se a array tivesse N elementos?

Se continuarmos repetindo esse padrão, veremos que uma soma de uma matriz sempre começa do mesmo jeito  (soma variável = 0) e termina do mesmo jeito (retornando a variável de soma local).

```javascript
function lucroTotalN(umPeriodo) {
  var soma = 0; // isso é sempre
  //... etc
  return sumatoria; //isso é sempre
}
```

Quais mudanças são as acumulativas (`soma = soma + ...`), precisamos de uma para cada elemento da matriz. Em outras palavras, temos que _visitar_ cada elemento dele, não importa quantos tenha. Mas como fazer isso? Essa ideia de repetir algo muitas vezes não lhe parece familiar?

