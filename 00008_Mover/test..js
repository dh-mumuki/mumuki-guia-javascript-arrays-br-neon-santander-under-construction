describe("", function() {
  it("mover move o último elemento", function() {
	var umArray = [1, 2, 3];
	var outroArray = [4, 5];

	mover(umArray, outroArray);

	assert.deepEqual(umArray, [1, 2]);
	assert.deepEqual(outroArray, [4, 5, 3]);
  })

})
