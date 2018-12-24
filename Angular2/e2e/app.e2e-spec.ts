/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for Angular2', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be Angular2', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('Angular2');
    })
  });

  it('network-name should be digipay-system@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('digipay-system@0.0.1.bna');
    });
  });

  it('navbar-brand should be Angular2',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('Angular2');
    });
  });

  
    it('LandRecord component should be loadable',() => {
      page.navigateTo('/LandRecord');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('LandRecord');
      });
    });

    it('LandRecord table should have 12 columns',() => {
      page.navigateTo('/LandRecord');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(12); // Addition of 1 for 'Action' column
      });
    });
  
    it('Nursery component should be loadable',() => {
      page.navigateTo('/Nursery');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Nursery');
      });
    });

    it('Nursery table should have 5 columns',() => {
      page.navigateTo('/Nursery');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('GoK component should be loadable',() => {
      page.navigateTo('/GoK');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('GoK');
      });
    });

    it('GoK table should have 6 columns',() => {
      page.navigateTo('/GoK');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(6); // Addition of 1 for 'Action' column
      });
    });
  
    it('Treasury component should be loadable',() => {
      page.navigateTo('/Treasury');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Treasury');
      });
    });

    it('Treasury table should have 5 columns',() => {
      page.navigateTo('/Treasury');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('FarmerAgent component should be loadable',() => {
      page.navigateTo('/FarmerAgent');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('FarmerAgent');
      });
    });

    it('FarmerAgent table should have 3 columns',() => {
      page.navigateTo('/FarmerAgent');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('NurseryAdmin component should be loadable',() => {
      page.navigateTo('/NurseryAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('NurseryAdmin');
      });
    });

    it('NurseryAdmin table should have 3 columns',() => {
      page.navigateTo('/NurseryAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('InspectionOfficer component should be loadable',() => {
      page.navigateTo('/InspectionOfficer');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('InspectionOfficer');
      });
    });

    it('InspectionOfficer table should have 3 columns',() => {
      page.navigateTo('/InspectionOfficer');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  
    it('TreasuryAdmin component should be loadable',() => {
      page.navigateTo('/TreasuryAdmin');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('TreasuryAdmin');
      });
    });

    it('TreasuryAdmin table should have 3 columns',() => {
      page.navigateTo('/TreasuryAdmin');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('Verification component should be loadable',() => {
      page.navigateTo('/Verification');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Verification');
      });
    });
  
    it('Monitoring component should be loadable',() => {
      page.navigateTo('/Monitoring');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Monitoring');
      });
    });
  
    it('Disbursement component should be loadable',() => {
      page.navigateTo('/Disbursement');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('Disbursement');
      });
    });
  

});