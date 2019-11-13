function lucroTotal(umPeriodo) {
  var soma = 0;
  for (var mes of umPeriodo) {
	soma = soma + mes;
  }
  return soma;
}
