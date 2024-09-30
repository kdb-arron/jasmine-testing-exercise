describe("Helpers test", function () {
    it('should sum total of tipAmt from allPayments on sumPaymentTotal()', function () {
      allPayments = {
        payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
        payment2: { billAmt: '200', tipAmt: '40', tipPercent: 20 }
      };
  
      expect(sumPaymentTotal('tipAmt')).toEqual(60);
      expect(sumPaymentTotal('billAmt')).toEqual(300);
    });
  
    it('should calculate correct tip percent on calculateTipPercent()', function () {
      expect(calculateTipPercent(100, 20)).toEqual(20);
      expect(calculateTipPercent(200, 50)).toEqual(25);
    });
  
    it('should append a new td to a tr on appendTd()', function () {
      let newTr = document.createElement('tr');
  
      appendTd(newTr, 'Test');
      expect(newTr.children.length).toEqual(1);
      expect(newTr.children[0].innerText).toEqual('Test');
    });
  
    afterEach(function() {
      allPayments = {};
    });
  });
  
  describe("appendDeleteBtn()", function () {
    it('should append a delete button and remove the row when clicked', function () {
      let newTr = document.createElement('tr');
      appendDeleteBtn(newTr);
  
      expect(newTr.children.length).toEqual(1);
      expect(newTr.children[0].innerText).toEqual('X');
  
      // Simulate a click event to delete the row
      newTr.children[0].click();
      expect(newTr.parentElement).toBeNull();  // the row should be removed
    });
  });
  