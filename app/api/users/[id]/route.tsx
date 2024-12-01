import { NextRequest, NextResponse } from "next/server"
import schema from "../schema";

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


export async function PUT(request: NextRequest,
    { params }: { params: Promise<{ id: number }> }) {

    const { id } = await params;
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(
            validation.error.errors,
            { status: 400 });
    }

    if (id > 10) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 });
    }

    return NextResponse.json(
        { id: 1, name: body.name });
}



export async function DELETE(request: NextRequest,
    { params }: { params: Promise<{ id: number }> }) {

    const { id } = await params;
    const body = await request.json();
    console.log(body);

    if (id > 10) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 });
    }

    return NextResponse.json({});
}
