test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
})

test("One euro should be 156.5 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const valueInDollar = 3.5
    const yenes = fromDollarToYen(valueInDollar);
    const dollarToEuro = 3.5 / 1.07
    const expected = dollarToEuro * 156.5;
    expect(yenes).toBe(expected);
})


test("One euro should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const valueInYen = 3.5
    const pounds =  fromYenToPound(valueInYen)
    const yenToEuro = 3.5 / 156.5
    const expected = yenToEuro * 0.87;
    expect(pounds).toBe(expected);
})