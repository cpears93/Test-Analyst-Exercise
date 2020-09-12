var signUp = require ('../..public/js/signUp.js')
var assert = require ('assert')

describe ('signUp', function () {
    beforeEach(function () {
        signUp = new signUp ()
    });

//Tests will be written in the form of "The user must..."

user ('must be able to sign up as a new user', function () {
signUp.submit("New User")    
assert.strictEqual(true, signUp.new_user)
});

user ('must sign up using 2 factor authentication', function () {
signUp.submit(7348)    
assert.strictEqual(7348, signUp.two_factor)
});

user ('must verify their email address', function () {
signUp.submit("Brian.Jennings@hotmail.com")    
assert.strictEqual("Brian.jennings@hotmail.com", signUp.email_confirmation)
});

user ('must enter a valid phone number', function () {
signUp.submit(03277626745)    
assert.strictEqual(03277626745, signUp.phone_number)
});

user ('must recieve a one-time password', function () {
signUp.submit("K4i&s@")    
assert.strictEqual("K4i&s@", signUp.otp_password)
});

user ('must create and confirm a 6 digit pin', function () {
signUp.submit(614829)   
assert.strictEqual(614829, signUp.otp_password)
});

user ('must confirm to the user a successful sign up', function () {
signUp.submit("New User")  
signUp.submit(7348)
signUp.submit("Brian.Jennings@hotmail.com")
signUp.submit(03277626745)
signUp.submit("K4i&s@")
signUp.submit(614829)
assert.strictEqual("New User", 7348, "Brian.Jennings@hotmail.com", 03277626745, "K4i&s@", 614829, signUp.confirm_signup)
});


});