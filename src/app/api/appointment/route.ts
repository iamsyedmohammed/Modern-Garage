import { NextResponse } from 'next/server';
import { sendAppointmentEmail } from '@/backend/emailService';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Abstracted logic executed seamlessly outside the router
    await sendAppointmentEmail(data);

    return NextResponse.json({ success: true, message: "Appointment request sent successfully!" });

  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 500 });
  }
}
