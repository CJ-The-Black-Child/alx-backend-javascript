const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber with SUM, 100, and 20 and return 10', function() {
        const stub = sinon.stub(Utils, 'calculateNumber');
        stub.returns(10);
        const spy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calledWith('The total is: 10')).to.be.true;
        stub.restore();
        spy.restore();
    });
});
