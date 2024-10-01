import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='w-full border-b-2 border-gray-200 bg-white font-sans'>
      <div className='w-full ml-2 container  flex itmes-center py-6 px-4'>
        <Link href="/" className='font-bold text-3xl whitespace-nowrap'>발랑</Link>

        <nav className='ml-20 px-5 py-1 font-medium text-lg w-full'>
        <ul className='flex justify-between w-full'>
           <li className=''>
             <Link href={"/brands"}>BRANDS</Link>
           </li>
            <li className='flex flex-row gap-x-5'>
              <Link href={"/sign-up"}>회원가입</Link>
              <Link href={"/brands"}>로그인</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;