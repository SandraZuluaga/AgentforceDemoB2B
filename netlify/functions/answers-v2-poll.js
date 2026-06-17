exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const t = parseInt(event.queryStringParameters && event.queryStringParameters.t, 10);
  const elapsed = t ? Date.now() - t : -1;
  const pending = !t || elapsed < 10000;

  if (pending) {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ job_id: 'mock-job-ds-001', status: 'PENDING' })
    };
  }

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      job_id: 'mock-job-ds-001',
      status: 'COMPLETED',
      answer: {
        summary: 'The global protein ingredient market is experiencing strong growth driven by sports nutrition and medical nutrition segments. Key trends include clean label demand, plant-protein blending, and sustainability credentials. NZMP whey protein concentrates hold strong positioning in APAC beverage applications with competitive heat stability profiles.',
        sources: [
          { title: 'Euromonitor: Sports Nutrition Global Market Sizing 2024', relevance: 'high' },
          { title: 'Mintel: Protein Ingredient Trends APAC Q4 2024', relevance: 'high' }
        ],
        market_size_usd_bn: 42.3,
        growth_rate_pct: 7.2,
        top_applications: [
          'Sports & Active Lifestyle',
          'Medical Nutrition',
          'Infant Formula'
        ]
      }
    })
  };
};
