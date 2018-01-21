describe("calca", function () {
    it("add", function () {
        var r = new cal().add(2, 3);
        expect(r).toBe(5);
    });
    it("addwrong", function () {
        var r = new cal().add(2, 3);
        expect(r).toBe(6);
    });

});