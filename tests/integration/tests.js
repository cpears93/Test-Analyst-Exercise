const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('app functionality', function () {
            beforeEach(function () {
                browser.ignoreSynchronization = true;
                browser.get('http://localhost:3000');
            });

//Integration tests written here in the form of "User should..."
user('')})           