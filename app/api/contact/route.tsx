import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const formData = new URLSearchParams()

    // IMPORTANT: must be verified sender domain email
    formData.append("from", process.env.MAILGUN_SENDER_EMAIL!)

    // user email goes here for reply
    formData.append("h:Reply-To", `${name} <${email}>`)

    formData.append(
      "to",
      process.env.MAILGUN_SENDER_EMAIL!
    )

    formData.append("subject", subject || "New Contact Form Submission")

    formData.append(
      "text",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )

    const response = await fetch(
      `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(
              `api:${process.env.MAILGUN_API_KEY}`
            ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      return NextResponse.json(
        { error: errorText },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}