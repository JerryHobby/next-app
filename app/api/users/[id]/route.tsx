import { NextRequest, NextResponse } from "next/server"
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    console.log(request.url);

    const user = await prisma.user.findFirst({
        where: { id }
    });

    if (!user) {
        return NextResponse.json(
            { error: 'User not found' },
            { status: 404 }
        );
    }

    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 });

    const user = await prisma.user.findFirst({
        where: { id }
    });

    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });

    const updatedUser = await prisma.user.update({
        where: { id },
        data: {
            name: body.name,
            email: body.email,
            username: body.username
        }
    });

    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const user = await prisma.user.findFirst({
        where: { id }
    });

    if (!user)
        return NextResponse.json({ error: 'User not found' }, { status: 404 });

    await prisma.user.delete({
        where: { id }
    });

    return NextResponse.json({});
}
