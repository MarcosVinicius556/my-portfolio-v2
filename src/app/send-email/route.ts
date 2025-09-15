import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_TO,
    pass: process.env.GMAIL_APP_PASSWORD!,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message, objective, phone } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos os campos são obrigatórios' }, { status: 400 });
    }

    const mailOptions = {
      from: '"Site" <marcosvinicios4132@gmail.com>', 
      to: process.env.EMAIL_TO,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Olá Marcos, um usuário está tentando entrar em contato através de seu site!</h2>
        <h3>Motivo da procura: ${objective}</h3>
        <h3>Telefone: ${phone}</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
}