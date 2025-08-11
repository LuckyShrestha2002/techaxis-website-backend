import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // <-- Replace with your own SMTP server
      port: 465,
      secure: true, // Use 'true' if your port is 465
      auth: {
        user: process.env.GMAIL_USER, // <-- Replace with your email
        pass: process.env.GMAIL_PASS, // <-- Replace with your password
      },
    });
  }

  async sendEnquiryEmail(name: string, email: string, course: string, message: string) {
    const mailOptions = {
      from: '"Enquiry Form" <no-reply@example.com>',
      to: 'luckystha92@gmail.com', // <-- Replace with the admin's email
      subject: `New Course Enquiry: ${course}`,
      html: `
        <h1>New Course Enquiry</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}