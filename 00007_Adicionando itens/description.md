Os arrays são muito úteis para conter vários elementos e nos ajudam a consultar quantos elementos eles contêm. Mas há outra coisa: podemos também adicionar elementos a qualquer momento, o que resolvemos usando o método `push`. Novamente, para adicionar um elemento a um array, devemos indicar o array seguido por um '.' e o método `push` com o elemento que queremos adicionar entre parenteses. Por exemplo:


```javascript
var pertences = ["espada", "escudo", "tocha"];
//pertences.length aqui vale 3;

pertences.push ("amuleto mágico");
//agora pertences.length vale 4
```

Como podemos ver, o “push” adiciona um elemento à lista, o que faz com que seu tamanho aumente. 
Mas em que parte da lista você adiciona? No princípio? Ao final? No meio?


> Crie uma variável do tipo array chamada pertences que contém as strings "espada","escudo","crossbow".
>
> Utilize o método push para adicionar a string "cross".
>
> Ah e, além disso, existe um método “pop”, que não possui parâmetros. Escreva “pertences.pop()” e investigue o que faz no console.

