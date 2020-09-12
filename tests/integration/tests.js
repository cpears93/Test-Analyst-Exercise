const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('app functionality', function () {
            beforeEach(function () {
                browser.ignoreSynchronization = true;
                browser.get('http://localhost:3000');
            });

//Integration tests written here in the form of "User must..."
user('must be able to sign up as new user', function (){
    sign_in = element(by.css('sign_in'))
    element(by.css('#sign_in')).click();
    expect(sign_in.getAttribute('value')).to.equal('signed_in')
})});

user('must be able to sign up using 2 factor authentication', function () {
    two_factor = element(by.css('two_factor'))
    element(by.css('#two_factor')).text();
    expect(two_factor.getAttribute('value')).to.equal(7348)
});

user('must be able to verify email address', function () {
    email_address = element(by.css('email_address'))
    element(by.css('#email_address')).text();
    expect(email_address.getAttribute('value')).to.equal('Brian.jennings@hotmail.com')
});

user('must be able to enter a valid phone number', function () {
    phone_number = element(by.css('phone_number'))
    element(by.css('#phone_number')).text();
    expect(phone_number.getAttribute('value')).to.equal(03277626745)
});

user('must recieve a one time password (OTP) to verify their mobile number', function () {
    otp_password = element(by.css('otp_password'))
    element(by.css('#otp_password')).text();
    expect(otp_password.getAttribute('value')).to.equal('K4i&s@')
});

user('must create and confirm a 6 digit PIN', function () {
    digit_pin = element(by.css('digit_pin'))
    element(by.css('#digit_pin')).text();
    expect(digit_pin.getAttribute('value')).to.equal(614829)
});

user('must confirm to the user a successful sign up', function () {
    confirm_signup = element(by.css('confirm_sign_up'))
    element(by.css('#confirm_signup')).click();
    expect(confirm_signup.getAttribute('value')).to.equal('confirm_signup')
});

