import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { emailTemplate } from '../../../../Template/EmailTemplate'

export async function POST(req) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD, 
        },
         tls: {
        rejectUnauthorized: false,
    },
    })

    try {
       await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: emailTemplate(name, email, message),
})
        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }
}