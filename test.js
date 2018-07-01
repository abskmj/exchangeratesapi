let expect = require("chai").expect;
let exchange = require('./index').getClient({ mock: true });


describe("Client", function() {

    it('should return all rates of current date', function() {
        return exchange().then(response => {
            expect(response.status).to.equals(200);
            expect(response.request.url).to.equals('https://exchangeratesapi.io/api/latest');
        })
    });

    it('should return all rates of a particular date', function() {
        let particular = "2018-01-01";
        return exchange({ date: particular }).then(response => {
            expect(response.status).to.equals(200);
            expect(response.request.url).to.equals(`https://exchangeratesapi.io/api/${particular}`);
        })
    });

    it('should return all rates of a particular currency', function() {
        let particular = "USD";
        return exchange({ base: particular }).then(response => {
            expect(response.status).to.equals(200);
            expect(response.data.base).to.equals(particular);
        })
    });

    it('should return particular rates of a particular currency', function() {
        let particular = "USD";
        return exchange({
            base: particular,
            symbols: "EUR,GBP"
        }).then(response => {
            expect(response.status).to.equals(200);
            expect(response.data.base).to.equals(particular);
            expect(response.data.rates).to.have.property('EUR');
            expect(response.data.rates).to.not.have.property('AUD');
        })
    });
});
