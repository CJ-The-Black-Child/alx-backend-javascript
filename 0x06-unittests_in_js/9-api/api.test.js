const request = require('request');
const expect = require('chai').expect;

describe('Index page', function () {
  it('should have status code 200', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct content', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', function () {
  it('should return status code 200 when :id is a number', function (done) {
    request('http://localhost:7865/cart/12', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return status code 404 when :id is not a number', function (done) {
    request('http://localhost:7865/cart/hello', function (error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
