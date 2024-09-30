describe("Payments test (with setup and tear-down)", function () {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
      submitPaymentInfo();
  
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('100');
      expect(allPayments['payment1'].tipAmt).toEqual('20');
      expect(allPayments['payment1'].tipPercent).toEqual(20);
    });
  
    it('should create a new payment on createCurPayment()', function () {
      let curPayment = createCurPayment();
  
      expect(curPayment).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20 });
    });
  
    it('should update the payment table on appendPaymentTable()', function () {
      let curPayment = { billAmt: '100', tipAmt: '20', tipPercent: 20 };
      appendPaymentTable(curPayment);
  
      let paymentTds = document.querySelectorAll('#paymentTable tbody tr td');
      expect(paymentTds.length).toEqual(3);
      expect(paymentTds[0].innerText).toEqual('$100');
      expect(paymentTds[1].innerText).toEqual('$20');
      expect(paymentTds[2].innerText).toEqual('20%');
    });
  
    afterEach(function () {
      allPayments = {};
      paymentId = 0;
      paymentTbody.innerHTML = '';
    });
  });
  