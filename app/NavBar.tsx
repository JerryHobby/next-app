import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className='flex bg-slate-200 p-5 space-x-3'>
            <Link href='/'>NextJS</Link>
            <Link href='/users'>Users</Link>
            <Link href='/api/auth/signin'>Login</Link>
            <Link href={'/api/auth/signout'}>Logout</Link>
            <Link href={'/api/auth/token'}>Token</Link>
        </div>
    )
}

export default NavBar