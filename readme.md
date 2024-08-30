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

try
{
    const data = await getAuthToken(clientId, secretKey) // returns Authentication token, it's lifetime and type(Bearer)
}
catch (error)
{
    //...
}

````

## Order request
To place an order request, businesses must send payment details, technical specifications, and the amount to be paid to the online payment server. If the process is successful, the customer should be redirected to the online payment page at the redirect address returned to the _link parameter to complete the payment. You do not need to pass ``Content-Type`` or ``Authorization`` header since they are already set by itself

````js
try
{
    // returns order_id and links for payment details and redirects
    const response = await orderRequest(requestCredentials) // requestCredentials is an object and it's strucutre shown below
}
catch (error)
{
    //...
}
````

A structure of requestCredentials:
````json

{
    "headers": {
        "Authorization": "Bearer some_token",
        "Content-Type": "application/json"
    },
    "body": {
        "callback_url": "https://example.com/callback",
        "external_order_id": "order_12345",
        "purchase_units": {
            "basket": [
                {
                    "product_id": "prod_001",
                    "quantity": 2, 
                    "unit_price": 100 
                },
                {
                    "product_id": "prod_002", 
                    "quantity": 1, 
                    "unit_price": 200 
                }
            ],
            "total_amount": 420 
        },
        "redirect_urls": {
            "success": "https://example.com/success", 
            "fail": "https://example.com/fail"
        }
    }
}


````

For more options for the request check out [Bank of Georgia's official docs ](https://api.bog.ge/docs/en/payments/standard-process/create-order)

## Payment details
This method allows businesses to receive detailed information about an online payment using its identifier.

**Note: The in order to run this function, ``getAuthToken()`` must be run first**
````js

try
{
    const details = await paymentDetails(order_id) // fetches payment details for the given order ID
}
catch (error)
{
    //...
}


````
