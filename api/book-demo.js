// api/book-demo.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxJYrGZZCX9cuMMIRCfE1nnq3azf3kDgLEC06pzIZngyjp0q2UHbSfd5z5KG9vBXEV/exec";
  const SECURITY_TOKEN = "MY_SECRET_KEY"; // keep it secret, never expose in frontend

  const payload = { ...req.body, token: SECURITY_TOKEN };

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
}
