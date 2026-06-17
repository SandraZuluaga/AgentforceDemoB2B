exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  return {
    statusCode: 202,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      job_id: 'mock-job-ds-001',
      status: 'PENDING',
      message: 'Query submitted successfully'
    })
  };
};
