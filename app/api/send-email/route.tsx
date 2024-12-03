import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST() {

    await resend.emails.send({
        from: "Jerry Hobby <Jerry@jerryhobby.com>",
        to: "jerry@JerryHobby.com",
        subject: "Hello from my NextApp",
        react: <WelcomeTemplate name="Jerry" />,
    });

    return NextResponse.json({ });
}

