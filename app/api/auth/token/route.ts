import { NextRequest, NextResponse } from "next/server"
import { auth } from "@/auth"


export async function GET(request: NextRequest) {
    console.log(request.url);


    const token = await auth();
    return NextResponse.json(token);
}
