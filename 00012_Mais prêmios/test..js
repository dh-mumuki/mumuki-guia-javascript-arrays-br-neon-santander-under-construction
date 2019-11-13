describe ("", function () {
  it ("medalhaDeAcordoComPosto (1)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (1), "ouro")
  })
  it ("medalhaDeAcordoComPosto (2)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (2), "prata")
  })
  it ("medalhaDeAcordoComPosto (3)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (3), "bronze")
  })
  it ("medalhaDeAcordoComPosto (4)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (4), "nada")
  })
  it ("medalhaDeAcordoComPosto (15)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (15), "nada")
  })
  it ("medalhaDeAcordoComPosto (0)", function () {
assert.deepEqual (medalhaDeAcordoComPosto (0), "nada")
  })
})

