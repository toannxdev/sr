let response = JSON.parse($response.body);

response.response.user.vip.xiuxiu_vip = 100;
response.response.user.birthday = '2020-01-01';
response.response.user.screen_name = 'Meitu Hacker';
response.response.user.gender = 'm';

$done({ body: JSON.stringify(response) });
