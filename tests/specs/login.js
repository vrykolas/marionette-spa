var config = require('../spec-config');

describe('Login Page', function() {
  before(function(done) {
    casper.start(config.URL.dev + '/login').then(function() {
      done();
    });
  });

  describe('Check required elements', function() {
    before(function(done) {
      casper.waitForSelector('form#login', function() {
        done();
      });
    });

    it('should have a login form', function() {
      'form#login'.should.be.inDOM;
    });

    it('the login form should have an email field', function() {
      '#login #email'.should.be.inDOM;
    });

    it('the login form should have a password field', function() {
      '#login #password'.should.be.inDOM;
    });

    it('the login form should have a login button', function() {
      '#login .login-button'.should.be.inDOM;
    });

    it('the login form should have a forgotten password link', function() {
      '#login a.forgotten-password-link'.should.be.inDOM;
    });
  });

  describe('Check client-side validation', function() {
    before(function(done) {
      casper.waitForSelector('form#login', function() {
        done();
      });
    });

    it('should display an error if no email is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': '',
          'password': 'password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .email-error',
          function() {
            '#login .email-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });

    it('should display an error if an invalid email is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'bob',
          'password': 'password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .email-error',
          function() {
            '#login .email-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });

    it('should display an error if no password is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'valid-email@example.com',
          'password': ''
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .password-error',
          function() {
            '#login .password-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });
  });

  describe('Check server-side validation', function() {
    before(function(done) {
      casper.then(function() {
        this.waitForSelector('form#login', function() {
          done();
        });
      });
    });

    it('should display an error if an invalid login is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'invalid-username@example.com',
          'password': 'invalid-password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .invalid-login-error',
          function() {
            '#login .invalid-login-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });

    it('should display an error if an invalid email is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'invalid-username@example.com',
          'password': 'valid-password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .invalid-login-error',
          function() {
            '#login .invalid-login-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });

    it('should display an error if an invalid password is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'valid-username@example.com',
          'password': 'invalid-password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.then(function() {
        this.waitForSelector(
          '#login .invalid-login-error',
          function() {
            '#login .invalid-login-error'.should.be.inDOM;
            done();
          },
          function() {
            done();
          }
        );
      });
    });

    it('should redirect if a valid login is supplied', function(done) {
      casper.then(function() {
        this.fill('form#login', {
          'email': 'valid-username@example.com',
          'password': 'valid-password'
        }, true);
      });
      casper.then(function() {
        this.click('#login .login-button');
      });

      casper.waitForUrl(
        '/select-customer',
        function() {
          config.URL.dev + '/select-customer'.should.matchCurrentUrl;
          done();
        },
        function() {
          done();
        }
      );
    });
  });
});
