let response = JSON.parse($response.body);
let url = $request.url;

// check if the request is for the current user
if (url.startsWith('https://api.account.meitu.com/users/show_current.json')) {
  response.response.user.vip.xiuxiu_vip = 100;
  response.response.user.birthday = '2020-01-01';
  response.response.user.screen_name = 'Meitu Hacker';
  response.response.user.gender = 'm';
} else if (
  url.startsWith(
    'https://api.xiuxiu.meitu.com/v1/account/verify_credentials.json'
  )
) {
  response.data.screen_name = 'Meitu Hacker';
  response.data.vip_type = 1;
  response.data.free_trial = 0;
  response.data.is_expert_user = 1;
} else if (
  url.startsWith('https://api.xiuxiu.meitu.com//v1/vip/vip_show.json')
) {
  response.data.is_valid_user = 1;
  response.data.vip_type = 1;
  response.data.sub_type = 2;
  response.data.renew = 1;
  response.data.valid_time = 1720276716;
  response.data.in_valid_time = 1920276716;
  response.data.is_expire = 0;
  response.data.expire_days = -200;
  response.data.vip_tmp_end_time = -1;
  response.data.sub_card_modules = { '02': '200,201,203,204,206,207,208,209,210,211,212,218,400,230,215,213,216,217,220,222,223,224' };
}

$done({ body: JSON.stringify(response) });
