describe("", function() {
  it("quantidadeDeMesesComPerda([1]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([1]), 0)
  })
  it("quantidadeDeMesesComPerda([2, 20, 20]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([2, 20, 20]), 0)
  })
  it("quantidadeDeMesesComPerda([]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([]), 0)
  })
  it("quantidadeDeMesesComPerda([0, 0, 0]) é 0", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([0, 0, 0]), 0)
  })
  it("quantidadeDeMesesComPerda([10, -10, 2, 100]) é 1", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([10, -10, 2, 100]), 1)
  })
  it("quantidadeDeMesesComPerda([-1, -2, -3]) é 3", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([-1, -2, -3]), 3)
  })
  it("quantidadeDeMesesComPerda([-1, -2, -3, -1, -1, -10]) é 6", function() {
	assert.deepEqual(quantidadeDeMesesComPerda([-1, -2, -3, -1, -1, -10]), 6)
  })
})

