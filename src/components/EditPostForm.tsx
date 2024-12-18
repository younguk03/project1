'use client'
import { UpdatePost } from '@/action/postActions'
import React, {useState } from 'react'
import style from './editPostForm.module.css'
import { useRouter } from 'next/navigation'

interface EditPostFormProps {
   id: string,
   title: string,
   description: string,
   kategorie: string
}

export default function EditPostForm({ 
   id, 
   title, 
   description, 
   kategorie }: EditPostFormProps) {
      const [newTitle, setNewTitle] = useState(title); //useState는 컴포넌트의 상태를 간편하게 생성하고 업데이트 해주는 도구를 제공해준다.
      const [newDescription, setNewDescription] = useState(description);
      const [newKategorie, setNewKategorie] = useState(kategorie);
      const router = useRouter();
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
   
         try {
            await UpdatePost(id, newTitle, newDescription, newKategorie)
            router.push('/');
            router.refresh();
         } catch (error) {
            console.log(error)
         }
      }


   return (
      <div className={style.main}>
         <div className={style.edit}>수정하기</div>
         <div className='m-5 mr-10 ml-10'>
            <form action="/" onSubmit={handleSubmit}>
               
               <div className={style.one}>
                  <label className='mr-2'>제목</label>
                  <input
                     type="text"
                     value={newTitle}
                     onChange={(e) => setNewTitle(e.target.value)}
                     placeholder='제목'
                     className={style.title}
                  />
               </div>
               <div>
                  <textarea
                     name="description"
                     value={newDescription}
                     onChange={(e) => {
                        setNewDescription(e.target.value);
                     }}
                     placeholder='본문'
                     className={style.description}
                  />
               </div>
               <div>
               <label>카테고리</label>
               <select name="languages" id="kategorie" className={style.kategorie}
               onChange={(e) => setNewKategorie(e.target.value) }
               >
                  <option value="영화/만화">영화/만화</option>
                  <option value="시사/지식">시사/지식</option>
                  <option value="도서">도서</option>
                  <option value="스포츠">스포츠</option>
                  <option value="여행/맛집">여행/맛집</option>
               </select>
               </div>
               <div className='flex justify-center'>
                  <button type='submit' className={style.submit}>수정</button>
               </div>
            </form>
         </div>
      </div>
   )
}