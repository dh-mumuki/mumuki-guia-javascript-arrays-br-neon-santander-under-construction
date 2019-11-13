describe("", function() {
  it("quantidadeDeMesesComLucro([1]) é 1", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([1]), 1)
  })
  it("quantidadeDeMesesComLucro([2, 20, 20]) é 3", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([2, 20, 20]), 3)
  })
  it("quantidadeDeMesesComLucro([]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([]), 0)
  })
  it("quantidadeDeMesesComLucro([0, 0, 0]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([0, 0, 0]), 0)
  })
  it("quantidadeDeMesesComLucro([10, -10, 2, 100]) é 3", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([10, -10, 2, 100]), 3)
  })
  it("quantidadeDeMesesComLucro([-1, -2, -3]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComLucro([-1, -2, -3]), 0)
  })
})
