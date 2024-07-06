let response = JSON.parse($response.body);
let url = $request.url;

// check if the request is for the current user
if (url.startsWith('https://api.account.meitu.com/users/show_current.json')) {
  response.response.user.vip.xiuxiu_vip = 100;
  response.response.user.birthday = '2020-01-01';
  response.response.user.screen_name = 'Meitu Hacker';
  response.response.user.gender = 'm';
} else if (
  url.startsWith('https://api.xiuxiu.meitu.com//v1/vip/vip_show.json')
) {
  response = {
    degrade: 0,
    ret: 0,
    error_code: 0,
    error: 'Ok',
    msg: 'Successful',
    data: {
      id: 7215363515170162777,
      id_str: '7215363515170162777',
      gid: 3062959385,
      uid: 1140132468,
      platform: 2,
      is_valid_user: 1,
      vip_type: 1,
      sub_type: 2,
      sub_name: '包季',
      renew: 1,
      valid_time: 1720276716,
      in_valid_time: 2720881510,
      create_time: 1720276716,
      sub_biz_type: 0,
      is_expire: 0,
      expire_days: -100000,
      s: 1,
      request_time: 1720278043781,
      vip_tmp_end_time: -1,
      sub_card_modules: {
        '02': '200,201,203,204,206,207,208,209,210,211,212,218,400,230,215,213,216,217,220,222,223,224',
      },
    },
  };
}

$done({ body: JSON.stringify(response) });
