'use client'
import { createPost } from '@/action/postActions'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import styles from './addPostForm.module.css'

export default function AddPostForm() {
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [kategorie, setKategorie] = useState('')
   const router = useRouter()

   const handleSumbit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
         await createPost(title, description, kategorie)
         router.push('/')
      } catch (error) {
         console.error('글 생성 중 오류:', error)
         alert('토픽 생성 중 에러')
      }
   }
   return (
      <div className={styles.main}>
         <div className={styles.edit}>글쓰기</div>
         <div className='m-5 mr-10 ml-10'>
            <form action="/" onSubmit={handleSumbit}>
               
               <div className={styles.one}>
                  <label className='mr-2'>제목</label>
                  <input
                     type="text"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     placeholder='제목'
                     className={styles.title}
                  />
               </div>
               <div>
                  <textarea
                     name="description"
                     value={description}
                     onChange={(e) => {
                        setDescription(e.target.value);
                     }}
                     placeholder='본문'
                     className={styles.description}
                  />
               </div>
               <div>
               <label>카테고리</label>
               <select name="languages" id="kategorie" className={styles.kategorie}
               onChange={(e) => setKategorie(e.target.value) }
               >
                  <option value="영화/만화">영화/만화</option>
                  <option value="시사/지식">시사/지식</option>
                  <option value="도서">도서</option>
                  <option value="스포츠">스포츠</option>
                  <option value="여행/맛집">여행/맛집</option>
               </select>
               </div>
               <div className='flex justify-center'>
                  <button type='submit' className={styles.submit}>글 추가</button>
               </div>
            </form>
         </div>
      </div>
   )
}
