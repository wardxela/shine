import { createTRPCRouter, publicProcedure } from "../trpc";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { sendMailSchema } from "../schemas/mail";

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT!),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} satisfies SMTPTransport.Options;

export const mailRouter = createTRPCRouter({
  send: publicProcedure.input(sendMailSchema).mutation(async ({ input }) => {
    const transporter = nodemailer.createTransport(smtpOptions);
    try {
      const result = await transporter.sendMail({
        to: "wardxela@gmail.com",
        subject: `Сообщение от пользователя ${input.name} сайта`,
        html: input.message,
      });
      return result.accepted;
    } catch (e) {
      return false;
    }
  }),
});
