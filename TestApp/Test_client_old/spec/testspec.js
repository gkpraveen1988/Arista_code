	describe("TEST FUNCTION:clone() ", function () {
		var clonedJson;
		beforeEach(function () {
			clonedJson = clone(inputResponseJsonSample);
		});
		it(" REMARKS:value cloned properly", function () {

			expect(clonedJson).toEqual(inputResponseJsonSample);

		});

		it("  REMARKS:cloned with out any reference", function () {

			clonedJson[0].hosts = "140";

			expect(clonedJson).not.toEqual(inputResponseJsonSample);

		});
	});