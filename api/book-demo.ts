import type { VercelRequest, VercelResponse } from '@vercel/node';

const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;
const SECURITY_TOKEN = process.env.SECURITY_TOKEN!;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!GOOGLE_SCRIPT_URL || !SECURITY_TOKEN) {
    return res.status(500).json({ error: 'Missing env variables!' });
  }

  const payload = { ...req.body, token: SECURITY_TOKEN };

  try {
    console.log("➡️ Sending payload to Google Script:", payload);

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    // Try to parse JSON safely
    try {
      const data = JSON.parse(text);
      return res.status(200).json(data);
    } catch {
      console.error("❌ Non-JSON response from Google Script:", text.slice(0, 200));
      return res.status(500).json({
        error: 'Google Script did not return JSON',
        raw: text.slice(0, 200), // first 200 chars for debugging
      });
    }

  } catch (err: any) {
    console.error("❌ API Error:", err);
    return res.status(500).json({ error: err.message || 'Server error' });
  }
}
