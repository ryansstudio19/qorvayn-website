import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required form fields.' },
        { status: 400 }
      );
    }

    const payload = {
      access_key: '0ae8c121-8064-4f5f-9198-7d52145dacea',
      name: String(name).trim(),
      email: String(email).trim(),
      subject: subject ? String(subject).trim() : `Inquiry from ${name} — QORVAYN`,
      message: String(message).trim(),
      from_name: 'QORVAYN Contact Form',
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) QorvaynServer/1.0',
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || 'Service returned an error.' },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error('Contact API handler error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
