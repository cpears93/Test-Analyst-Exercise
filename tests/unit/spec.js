var signUp = require ('../..public/js/signUp.js')
var assert = require ('assert')

describe ('signUp', function () {
    beforeEach(function () {
        signUp = new signUp ()
    });

//Tests will be written in the form of "The user must..."

user ('must be able to sign up as a new user', function () {
signUp.submit("New User")    
assert.equal(true, signUp.new_user)
});

user ('must sign up using 2 factor authentication', function () {
signUp.submit(7348)    
assert.equal(7348, signUp.two_factor)
});

user ('must verify their email address', function () {
signUp.submit("Brian.Jennings@hotmail.com")    
assert.equal("Brian.jennings@hotmail.com", signUp.email_confirmation)
});

user ('must enter a valid phone number', function () {
signUp.submit(03277626745)    
assert.equal(03277626745, signUp.phonenumber)
});

// user ('must recieve a one-time password', function () {
//     assert.equal(true, true)
// });

// user ('must create and confirm a 6 digit pin', function () {
//     assert.equal(true, true)
// });

// user ('must confirm to the user a successful sign up', function () {
//     assert.equal(true, true)
// });





})