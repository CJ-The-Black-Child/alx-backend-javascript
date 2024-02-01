const request = require('request');
const expect = require('chai').expect;

describe('Index page', function() {
    it('should have status code 200', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct content', function(done) {
        request('http://localhost:7865', function(error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

describe('Cart page', function() {
    it('should return status code 200 when :id is a number', function(done) {
        request('http://localhost:7865/cart/12', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return status code 404 when :id is not a number', function(done) {
        request('http://localhost:7865/cart/hello', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('Login endpoint', function() {
    it('should return "Welcome Betty" when userName is "Betty"', function(done) {
        request.post({
            url: 'http://localhost:7865/login',
            json: {userName: 'Betty'}
        }, function(error, response, body) {
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});

describe('Available payments endpoint', function() {
    it('should return correct payment methods', function(done) {
        request('http://localhost:7865/available_payments', function(error, response, body) {
            expect(JSON.parse(body)).to.deep.equal({
                payment_methods: {
                    credit_cards: true,
                    paypal: false
                }
            });
            done();
        });
    });
});
