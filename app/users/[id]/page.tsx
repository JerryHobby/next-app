import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: Promise<{
        id: string
    }>
}

const UserDetailPage = async ({ params }: Props) => {
    const { id } = await params;

    if (isNaN(parseInt(id))) return notFound();

    return (
        <div>UserDetailPage {id}</div>
    )
}

export default UserDetailPage