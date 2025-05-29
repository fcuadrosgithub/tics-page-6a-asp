import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" });
  }

  const { nombre, apellidos, email, telefono, asunto, mensaje, recipientEmail } = req.body;

  // Validación básica en el servidor
  if (!nombre || !apellidos || !email || !asunto || !mensaje || !recipientEmail) {
    return res.status(400).json({ error: "Todos los campos son obligatorios, incluyendo el correo del destinatario." });
  }

  // Configura el transportador de Nodemailer (usa tus variables de entorno)
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Tu correo configurado en .env.local (el remitente "técnico")
      to: recipientEmail, // ¡El correo del destinatario ingresado por el usuario!
      replyTo: email, // Permite que, al responder el correo, se responda al email del usuario que llenó el formulario
      subject: `Contacto ITESOED - Asunto: ${asunto} (de: ${nombre} ${apellidos})`,
      html: `
        <h2>Nuevo mensaje de contacto desde el formulario</h2>
        <p><strong>De:</strong> ${nombre} ${apellidos} (${email})</p>
        <p><strong>Teléfono:</strong> ${telefono || "No especificado"}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
        <hr>
        <p><small>Este correo fue enviado desde tu aplicación Next.js a la dirección que especificaste.</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res
      .status(500)
      .json({ error: "Error al enviar el correo electrónico.", details: error.message });
  }
}