import { NextResponse } from 'next/server';
import { sendAppointmentEmail } from '@/backend/emailService';

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*', // We will restrict this via env later if needed
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Abstracted logic executed seamlessly outside the router
    await sendAppointmentEmail(data);

    return NextResponse.json(
      { success: true, message: "Appointment request sent successfully!" },
      {
        headers: {
          'Access-Control-Allow-Origin': '*', // Change '*' to your frontend domain for security
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
