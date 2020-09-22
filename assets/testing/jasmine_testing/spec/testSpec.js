// describe("formatTime function", function() {
//     it("should return 2", function() {
//         let time = 2;
//         expect(formatTime(time,2)).toBe("100");
//     });
// });

describe("formatTime function", function() {
    it("should return 2", function() {
        let time = 2;
        expect(formatTime(time,2)).toBe("00:02");
    });
});


describe("formatTime function", function() {
    it("should return 5", function() {
        let time = 5;
        expect(formatTime(time,5)).toBe("00:05");
    });
});


describe("formatTime function", function() {
    it("should return 10", function() {
        let time = 10;
        expect(formatTime(time,10)).toBe("00:10");
    });
});


describe("formatTime function", function() {
    it("should return 20", function() {
        let time = 20;
        expect(formatTime(time,20)).toBe("00:20");
    });
});


describe("formatTime function", function() {
    it("should return 30", function() {
        let time = 30;
        expect(formatTime(time,30)).toBe("00:30");
    });
});


describe("formatTime function", function() {
    it("should return 60", function() {
        let time = 60;
        expect(formatTime(time,60)).toBe("01:00");
    });
});
