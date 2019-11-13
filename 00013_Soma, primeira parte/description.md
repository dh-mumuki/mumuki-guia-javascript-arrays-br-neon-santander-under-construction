Ana, contadora de uma empresa bem conhecida, contabiliza os lucros de cada mês em uma matriz. Por exemplo, para o último semestre do ano passado registrou o seguinte:

```javascript
//Em julho ganhou $ 50, em agosto perdeu $ 12, etc.
var lucroUltimoSemestre = [50, -12, 1000, 300, 200, 0];
```

E ela acabou de nos perguntar: _"posso saber o lucro de todo **um semestre**?"_

_"Óbvio"_, nós dissemos, e escrevemos o seguinte código:

```javascript
function somaLucroSemestre(umSemestre) {
  return umSemestre[0] + umSemestre[1] +
     	umSemestre[2] + umSemestre[3] +
     	umSemestre[4] + umSemestre[5];
}
```

_"Muito Obrigada"_, Ana disse, e os lucros foram calculados usando a função que passamos para ela. Mas pouco tempo depois, ele voltou dizendo que também registrou os lucros do primeiro trimestre deste ano:

```javascript
//Em janeiro a empresa faturou $80, em fevereiro, $453, em março $1.000
var lucrosPrimeiroTrimestre = [80, 453, 1000];
```

E ela nos perguntou: _ "Você poderia usar essa função que você me deu para calcular os ganhos do primeiro trimestre?"_

E estamos pensando :thought_balloon:.

> Tem algum problema na função `somaLucroSemestre` que escrevemos anteriormente? Funcionará com trimestres? E com quadrimestres?
>
> Experimente no console!
