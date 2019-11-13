A função `somaLucroSemestre` anterior tem dois problemas:

1. É muito repetitiva e tediosa para escrever. Temos que fazer muitas somas à mão!
2. E não é genérica, serve apenas para arrays de 6 elementos:

  * se tiver mais de seis elementos, só adiciona os seis primeiros;
  * se você tem menos, retorne coisas bizarras (você se lembra quando nós dissemos que se você fosse indexar coisas ruins poderiam acontecer :stuck_out_tongue: ?).

O que gostaríamos é adicionar todos os elementos do array de uma forma genérica, não importa quantos realmente existam: queremos uma função `lucroTotal`, que pode adicionar períodos de qualquer tamanho: semetres, quartos, etc. Que difícil!

> Nós já fizemos nossa versão; teste com as seguintes consultas:
>
>```javascript
>ム lucroTotal([2, 3])
>ム lucroTotal([2, 3, 1, 8, 8, -1])
>ム lucroTotal([])
>```
> Então siga-nos para eu te dizer como conseguimos :wink:

