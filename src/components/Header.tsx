'use client'
import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import icon from '../components/icon.png'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'



export default function Header() {
   const { status, data: session } = useSession();

   return (
      <div className={styles.body}>
         <Link href={'./'}>
            <Image src={icon} height={35} alt='beneficial information web site' className={styles.icon_image} />
         </Link>
         <div className='p-5'>
         {status === 'authenticated' && (
               <Link href={'./my_page'}>
                  <span className={styles.span}>My Page</span></Link>
            )}
            <div className='float-right'>

               {status === 'authenticated' ? (
                  <>
                     <div className='flex gap-2 items-center'>
                        <span>
                           <Link href={'/addPost'}>
                              <span className="border border-black p-2 rounded-3xl bg-black text-white text-sm mr-2">글쓰기</span>
                           </Link>
                        </span>
                        <span>
                           <Image className="rounded-full"
                              src={session?.user?.image ?? '/default-avatar.png'}
                              height={40}
                              width={40}
                              alt='user' />
                        </span>
                        <span className="font-bold">
                           {session?.user?.name}
                        </span>
                        <button onClick={() => signOut()} className={styles.login}>회원가입</button>
                     </div>
                  </>
               ) : (
                  <Link href={'./login_page'}>
                     <button className={styles.login}>로그인</button></Link>
               )}
            </div>
         </div>
      </div>

   )
}
