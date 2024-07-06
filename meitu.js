let response = JSON.parse($response.body);

response.response.user.vip.xiuxiu_vip = 100000;

$done({ body: JSON.stringify(response) });
