let homepage = require ('../pages/homepage');

describe('demo calculator tests', function(){

    it('addition test', function(){        
        homepage.get();
        homepage.enterFirstNumber('4');      
        homepage.enterSecondNumber('3');        
        homepage.clickGo();       
        homepage.verifyResult('7');
        browser.sleep(3000);
    });
});