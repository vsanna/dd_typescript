"use strict";
var ch6;
(function (ch6) {
    console.log("ch6");
    let user = {
        name: "a",
        age: 20,
        gender: "male",
        birth: {
            year: 2000,
            month: 10,
            day: 1,
        },
    };
    // user.birth.day = 10; // ERROR
})(ch6 || (ch6 = {}));
