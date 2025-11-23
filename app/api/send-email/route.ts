import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

// Configure Nodemailer with your email service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phone, budget, message } = await request.json()

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email to you (the portfolio owner)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: "abdulahadsiddiqui23@gmail.com", // Your email
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Confirmation email to the user
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message!",
      html: `
        <h2>Thank you for reaching out, ${fullName}!</h2>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Abdul Ahad Siddiqui</p>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailOptionsToYou)
    await transporter.sendMail(mailOptionsToUser)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
