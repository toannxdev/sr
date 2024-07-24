let response = JSON.parse($response.body);
let url = $request.url;

try {
  if (url.endsWith('/v1/renovate_session')) {
    response['info']['subscriptions'] = [
      {
        id: 6013463,
        status: 'trial',
        state: 'active_trial',
        in_grace_period: false,
        product: 'unlimited',
        platform: 'apple',
        starts_at: 1721799804,
        ends_at: 2722404603,
        plan_id: 'lk.ios.s1m.t7d.p15.v2',
        duration_unit: 'months',
        duration_value: 1000,
        auto_renew_status: true,
      },
    ];
  }
} catch (error) {
  print(error);
}

$done({ body: JSON.stringify(response) });
