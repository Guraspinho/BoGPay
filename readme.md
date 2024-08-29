# Bank Of Georgia online payment API

An NPM package to simplify the usage and integration of the Bank of Georgia online payment API.


## Documentation

Check [Bank of Georgia API docs](https://api.bog.ge/docs/en/payments/introduction) for further information.


## Installation
Install the package with:

``` sh
npm install bogpay

```


## Usage

To use the library, [HTTP Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication) is required. You will need to know the unique credentials of your business to enter the system. These credentials consist of two parameters, `client_id`, and `client_secret`, used as the username and password for business authentication.

### How to obtain the credentials for entering the business system?

Upon registering a company as a business in the banking system and providing all the necessary data, the system provides the credentials `client_id` and `client_secret` necessary to enter the system. These credentials are unique identifiers of the business. It is impermissible to disclose or transfer the `client_secret` parameter to another person. Doing so significantly increases the probability of a security breach. The business cannot change the `client_secret` parameter.
