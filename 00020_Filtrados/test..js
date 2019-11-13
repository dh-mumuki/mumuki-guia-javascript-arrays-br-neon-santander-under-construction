describe("", function() {
  it("saldoDeMesesComLucro([1]) é [1]", function() {
    assert.deepEqual(saldoDeMesesComLucro([1]), [1])
  })
  it("saldoDeMesesComLucro([2, 20, 20]) é [2, 20, 20]", function() {
    assert.deepEqual(saldoDeMesesComLucro([2, 20, 20]), [2, 20, 20])
  })
  it("saldoDeMesesComLucro([]) é []", function() {
    assert.deepEqual(saldoDeMesesComLucro([]), [])
  })
  it("saldoDeMesesComLucro([0, 0, 0]) é []", function() {
    assert.deepEqual(saldoDeMesesComLucro([0, 0, 0]), [])
  })
  it("saldoDeMesesComLucro([10, -10, 2, 100]) é [10, 2, 100]", function() {
    assert.deepEqual(saldoDeMesesComLucro([10, -10, 2, 100]), [10, 2, 100])
  })
  it("saldoDeMesesComLucro([-1, -2, -3]) é []", function() {
    assert.deepEqual(saldoDeMesesComLucro([-1, -2, -3]), [])
  })
})