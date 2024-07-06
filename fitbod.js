let response = JSON.parse($response.body);

let date = new Date();
date.setFullYear(date.getFullYear() + 1000);
const expiration_at = date.getTime();
const expiration_at_date = new Date(expiration_at);

response.data.subscriptions[0].expiration_at = expiration_at;
response.data.subscriptions[0].expiration_at_date = expiration_at_date.toISOString();

$done({ body: JSON.stringify(response) });
