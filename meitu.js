let response = JSON.parse($response.body);

response.response.user.vip.xiuxiu_vip = 100000;
response.response.user.birthday = '2020-01-01';

$done({ body: JSON.stringify(response) });
