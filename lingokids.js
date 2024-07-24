let response = JSON.parse($response.body);
let url = $request.url;

if (
  url.endsWith('/receipts') ||
  url.endsWith('/auth/provider') ||
  url.endsWith('/users/profile') ||
  url.endsWith('/users/identities') ||
  url.endsWith('/v1/renoate_session')
) {
  response.info.subscriptions[0] = {
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
    duration_value: 1,
    auto_renew_status: true,
  };
}

$done({ body: JSON.stringify(response) });
