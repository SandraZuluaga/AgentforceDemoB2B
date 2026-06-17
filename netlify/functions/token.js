exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_token: 'mock_bearer_token_deepsights_12345',
      token_type: 'Bearer',
      expires_in: 3600
    })
  };
};
