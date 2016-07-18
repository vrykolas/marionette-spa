var config = require('../features-config');

describe('Login Page', function() {
  before(function() {
    browser.url(config.URL.dev + '/login');
  });

  describe('Check required elements', function() {
    beforeEach(function() {
      browser.refresh();
      browser.waitForExist('#login');
    });

    it('should have a login form', function() {
      browser.isExisting('#login').should.be.true;
    });

    it('the login form should have an email field', function() {
      browser.isExisting('#login #email').should.be.true;
    });

    it('the login form should have a password field', function() {
      browser.isExisting('#login #password').should.be.true;
    });

    it('the login form should have a login button', function() {
      browser.isExisting('#login .login-button').should.be.true;
    });

    it('the login form should have a forgotten password link', function() {
      browser.isExisting('#login a.forgotten-password-link').should.be.true;
    });
  });

  describe('Check client-side validation', function() {
    beforeEach(function() {
      browser.refresh();
      browser.waitForExist('#login');
    });

    it('should display an error if no email is supplied', function() {
      browser.setValue('#login #email', '');
      browser.setValue('#login #password', 'password');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .email-error');
      browser.isExisting('#login .email-error').should.be.true;
    });

    it('should display an error if an invalid email is supplied', function() {
      browser.setValue('#login #email', 'bob');
      browser.setValue('#login #password', 'password');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .email-error');
      browser.isExisting('#login .email-error').should.be.true;
    });

    it('should display an error if no password is supplied', function() {
      browser.setValue('#login #email', 'valid-email@example.com');
      browser.setValue('#login #password', '');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .password-error');
      browser.isExisting('#login .password-error').should.be.true;
    });
  });

  describe('Check server-side validation', function() {
    beforeEach(function() {
      browser.refresh();
      browser.waitForExist('#login');
    });

    it('should display an error if an invalid login is supplied', function() {
      browser.setValue('#login #email', 'invalid-username@example.com');
      browser.setValue('#login #password', 'invalid-password');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .invalid-login-error');
      browser.isExisting('#login .invalid-login-error').should.be.true;
    });

    it('should display an error if an invalid email is supplied', function() {
      browser.setValue('#login #email', 'invalid-username@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .invalid-login-error');
      browser.isExisting('#login .invalid-login-error').should.be.true;
    });

    it('should display an error if an invalid password is supplied', function() {
      browser.setValue('#login #email', 'valid-username@example.com');
      browser.setValue('#login #password', 'invalid-password');
      browser.leftClick('#login .login-button');
      browser.waitForExist('#login .invalid-login-error');
      browser.isExisting('#login .invalid-login-error').should.be.true;
    });

    it('should redirect if a valid login is supplied', function() {
      browser.setValue('#login #email', 'valid-username@example.com');
      browser.setValue('#login #password', 'valid-password');
      browser.leftClick('#login .login-button');
      browser.waitUntil(
        function() {
          return browser.url === config.URL.dev + '/select-customer';
        },
        5000,
        100
      );
      browser.url().should.equal(config.URL.dev + '/select-customer');
    });
  });
});
