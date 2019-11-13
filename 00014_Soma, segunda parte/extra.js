function lucroTotal(umPeriodo) {
  var soma = 0;
  for (var saldo of umPeriodo) {
	soma += saldo;
  }
  return soma;
}
