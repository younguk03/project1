import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import younguk from './image.png'
import Link from 'next/link'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function myPage() {
   const session = await auth()
   if (!session) {
      redirect('/login')
   }
   return (
      <div>
         <div>
            <Header />
         </div>
         <div className='m-10 mr-16 ml-16'>
            <h1 className='text-2xl font-bold mb-2'>간략한 자기 소개</h1>
            <div className='flex border p-3 border-gray-300 rounded-lg'>
               <Image src={younguk} alt="younguk" height={160} className="ml-5 mr-10 mt-2 border" />
               <span>
                  <div className='mt-3'>
                     <p className="text-sm">이름: 김영욱</p>
                     <p className="text-sm">연락처: 010-4487-xxxx</p>
                     <p className="text-sm">학과: 정보보호학전공</p>
                     <p className="text-sm">취미: 클래식 기타,그림,축구영상보기</p>
                     <p className="text-sm">좋아하는 분야: 프로그래밍(JAVA, Python 등)</p>
                  </div>
               </span>
            </div>
            <div>
               <h1 className='text-2xl font-bold mb-2 m-2 mt-10'>내 프로젝트</h1>
               <div className='border p-3 border-gray-300 rounded-lg'>
                  <p>1. clud-1</p>
                  <p className='text-sm ml-4'>Github: <Link href={'https://github.com/younguk03/crud1'} className='hover:text-blue-500 hover:underline'>https://github.com/younguk03/crud1</Link></p>
                  <p className='text-sm ml-4'>vercel: <Link href={'https://crud1-phi.vercel.app/'} className='hover:text-blue-500 hover:underline'>https://crud1-phi.vercel.app/</Link></p>

                  <p className='mt-4'>2. nextjstest1</p>
                  <p className='text-sm ml-4'>Github: <Link href={'https://github.com/younguk03/nextjstest1'} className='hover:text-blue-500 hover:underline'>https://github.com/younguk03/nextjstest1</Link></p>
                  <p className='text-sm ml-4'>vercel: <Link href={'https://crud1-phi.vercel.app/'} className='hover:text-blue-500 hover:underline'>https://nextjstest1-indol.vercel.app/</Link></p>

                  <p className='mt-4'>3. 2-2teamproject</p>
                  <p className='text-sm ml-4'>Github: <Link href={'https://github.com/younguk03/2-2teamproject'} className='hover:text-blue-500 hover:underline'>https://github.com/younguk03/2-2teamproject</Link></p>
                  <p className='text-sm ml-4'>vercel: <Link href={'https://2-2teamproject.vercel.app/'} className='hover:text-blue-500 hover:underline'>https://2-2teamproject.vercel.app/</Link></p>

                  <p className='mt-4'>4. diso-shapping</p>
                  <p className='text-sm ml-4'>Github: <Link href={'https://github.com/younguk03/daisoo-shapping'} className='hover:text-blue-500 hover:underline'>https://github.com/younguk03/daisoo-shapping</Link></p>
                  <p className='text-sm ml-4'>vercel: <Link href={'https://daisoo-shapping.vercel.app/'} className='hover:text-blue-500 hover:underline'>https://daisoo-shapping.vercel.app/</Link></p>

                  <p className='mt-4'>5. 끝판왕 사전</p>
                  <p className='text-sm ml-4'>Github: <Link href={'https://github.com/younguk03/my-dictionary-site'} className='hover:text-blue-500 hover:underline'>https://github.com/younguk03/my-dictionary-site</Link></p>
                  <p className='text-sm ml-4'>vercel: <Link href={'https://my-dictionary-site.vercel.app/'} className='hover:text-blue-500 hover:underline'>https://my-dictionary-site.vercel.app/</Link></p>
               </div>
            </div>
            
            <div>
               <h1 className='text-2xl font-bold mb-2 m-2 mt-10'>영상</h1>
               <div className='border p-3 border-gray-300 rounded-lg pb-5 mb-5'>
                  <p>자기소개 영상</p>
                  <iframe height="200" src="https://www.youtube.com/embed/dLLFmcO4QXI?si=9hDF5L321fjkVrdB" title="YouTube video player"></iframe>
                  <p className='mt-4'>기타 연주영상</p>
                  <iframe height="250" src="https://www.youtube.com/embed/Xn_2HKPyII0?si=pv_TzAMMA9-_S9if" title="YouTube video player"></iframe>
               </div>
            </div>
         </div>
      </div>
   )
}
