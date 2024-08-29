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


## Authentication

This method allows businesses to undergo the authentication process. Upon calling the API, the online payment server returns the ``Bearer Token``, which is the necessary authentication parameter for calling all further methods.

````js


bogpay.getAuthToken(clientId, secretKey)
.then(data => 
    {
        console.log(data); // the token can be accessed through data.access_token
    })
.catch(error =>
    {
        console.error(error);
    });

````

## Order request
To place an order request, businesses must send payment details, technical specifications, and the amount to be paid to the online payment server. If the process is successful, the customer should be redirected to the online payment page at the redirect address returned to the _link parameter to complete the payment. You do not need to pass ``Content-Type`` or ``Authorization`` header since they are already set by itself



## Payment details

````js

paymentDetails()
.then(data => 
    {
        console.log(data);
    })
.catch(error =>
    {
        console.error(error);
    });

````
