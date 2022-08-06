import { Handlers } from "$fresh/server.ts";
import { SmtpClient } from "mailer/smtp.ts";

export const handler: Handlers = {
    async POST(req) {
        const email = getPropertyFromUrl(req.url, "email");
        const firstName = getPropertyFromUrl(req.url, "firstName");
        const lastName = getPropertyFromUrl(req.url, "lastName");
        const message = getPropertyFromUrl(req.url, "message");
        
        const SUBJECT = `Contact - ${firstName} ${lastName} - ${email}`;
        const BODY = `${message}`;
        const client = new SmtpClient();

        if (!email || !firstName || !lastName || !message) {
            return new Response(JSON.stringify({ success: false, message: "Missing parameters" }), { status: 400 });
        }

        await client.connectTLS({
            hostname: "smtp.gmail.com",
            port: 465,
            username: "hidanshira2@gmail.com",
            password: Deno.env.get("GMAIL_APP_PASSWORD"),
        });
          
        await client.send({
            from: "hidanshira2@gmail.com",
            to: "dmarcano.ml@gmail.com",
            subject: SUBJECT,
            content: BODY,
        });
          
        await client.close();
        return new Response(JSON.stringify({ message: "ok" }), { status: 200 });
    }
}

const getPropertyFromUrl = (url: string, property: string) => {
    const urlObject = new URL(url);
    return urlObject.searchParams.get(property);
}