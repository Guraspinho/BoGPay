
// headers for request function
type RequestHeaders = 
{
    "Accept_Language"?: string,
    "Authorization": string,
    "Content-Type"?: string,
    "Idempotency-Key"?: string,
    "Theme"?: string
}

// information of a buyer
type Buyer = 
{
    "full_name"?: string
    "masked_email"?: string
    "maked_phone"?: string
}


// basket of things bougt
interface BasketItem
{
    "product_id": string; // required
    "description"?: string; // optional
    "quantity": number; // required
    "unit_price": number; // required
    "unit_discount_price"?: number; // optional
    "vat"?: number; // optional
    "vat_percent"?: number; // optional
    "total_price"?: number; // optional
    "image"?: string; // optional
    "package_code"?: string; // optional
    "tin"?: string; // optional
    "pinfl"?: string; // optional
    "product_discount_id"?: string; // optional
}

// turn basket into an array
type Basket = BasketItem[];


// ***** Purchase units *****

type Delivery = 
{
    "amount"?: number;
}

type purchase_units = 
{
    "basket": Basket,
    "delivery"?: Delivery
    "total_amount": number,
    "total_discount_amount"?:number,
    "currency"?: string
}


// ***** Redirect urls *****

type RedirectUrls = 
{
    "success"?: string,
    "fail"?: string
}


// ***** types for config *****

type LoanType = 
{
    "type"?: string
    "month"?: string
}

type CampaignType = 
{
    "card"?: string,
    "type"?: string,
}

type GooglePay = 
{
    "google_pay_token"?: string,
    "external"?:boolean
}

type ApplePay = 
{
    "external"?: boolean
}


type Account = 
{
    "tag"?: string
}
type Config = 
{
    "loan"?: LoanType,
    "campaign"?: CampaignType,
    "google_pay"?:  GooglePay
    "apple_pay"?: ApplePay
    "account"?: Account
}

// main type of request body

type RequestBody = 
{
    "application_type"?: string,
    "buyer"?: Buyer,
    "callback_url": string,
    "external_order_id"?: string,
    "capture"?: string,
    "purchase_units": purchase_units,
    "redirect_urls"?: RedirectUrls,
    "ttl"?: number,
    "payment_method"?: Array<string>
    "config"?: Config
}

// full type opf a request

export type requestCredentials = 
{
    headers: RequestHeaders,
    body: RequestBody
}