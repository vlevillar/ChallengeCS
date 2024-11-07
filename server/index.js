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

        const headerImagePath = path.join(__dirname, '../public', 'headerImage.png');
        const footerLogoPath = path.join(__dirname, '../public', 'footerImage.png');
        const headerImage = fs.readFileSync(headerImagePath).toString("base64");
        const footerLogo = fs.readFileSync(footerLogoPath).toString("base64");

        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['valentinodelforvillar@gmail.com'],
            subject: 'Hello World',
            html: htmlContent,
            attachments: [
                {
                    content: headerImage,
                    filename: "headerImage.png",
                    type: "image/png",
                    disposition: "inline",
                    content_id: "headerImage"
                },
                {
                    content: footerLogo,
                    filename: "footerImage.png",
                    type: "image/png",
                    disposition: "inline",
                    content_id: "footerLogo"
                }
            ]
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
})();
