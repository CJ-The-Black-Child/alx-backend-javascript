const sinon = require('sinon');
const expect = require('chai').expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
    it('should call calculateNumber with SUM, 100, and 20', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        spy.restore();
    });
});
