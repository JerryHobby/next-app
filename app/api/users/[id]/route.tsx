import { NextRequest, NextResponse } from "next/server"

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> }) {

    const { id } = await params;
    console.log(request.url, id);

    if (id > 10) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 });
    } else {
        return NextResponse.json(
            { id: 1, name: 'Mosh' });
    }
}
