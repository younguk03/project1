'use client'
import { deletePost } from '@/action/postActions'
import React from 'react'

export default function removeBtn({ id }: { id: string }) {
   async function removePost() {
      const confirmed = confirm('이 글을 지울까요?')
      if (confirmed) {
         try {
            await deletePost(id)
         } catch (error) {
            console.error('삭제중 오류 발생')
            console.log(error)
         }
      }
   }
   return (
      <button onClick={removePost}>
         삭제
      </button>
   )
}
