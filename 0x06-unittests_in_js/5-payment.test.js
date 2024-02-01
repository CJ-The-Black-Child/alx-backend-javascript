const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach(function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when inputs are 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log "The total is: 20" when inputs are 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnceWith('The total is: 20')).to.be.true;
  });
});
