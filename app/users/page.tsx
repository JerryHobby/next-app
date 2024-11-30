import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link';

interface Props {
    searchParams: Promise<{ sortOrder: string }>
}

const UsersPage = async ({ searchParams }: Props) => {
    const { sortOrder } = await searchParams;

    return (
        <>
            <h1>Users</h1>
            <Link className='btn' href="/users/new">New User</Link>
            <UserTable sortOrder={sortOrder} />
        </>

    )
}

export default UsersPage