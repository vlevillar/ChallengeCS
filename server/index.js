import { Resend } from "resend";
import dotenv from 'dotenv';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: 'server/.env.local' });

const API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(API_KEY);

(async function () {
    try {
        const templatePath = path.join(__dirname, 'template', 'emailtemplate.html');
        const htmlContent = fs.readFileSync(templatePath, 'utf8');

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['anthony@customerscoops.com'],
            subject: 'Hello World',
            html: htmlContent,
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
})();
