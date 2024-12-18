import { getPost } from '@/action/postActions'
import { auth } from '@/auth'
import EditPostForm from '@/components/EditPostForm'
import { redirect } from 'next/navigation'
import React from 'react'
//use client가 없으니까 auth를 쓰면 됨


export default async function EditPostPage({
   params,
}: {
   params: { id: string }
}) {
   const session = await auth()
   if (!session) {
      redirect('/login')
   }

   const { id } = await params
   const { post } = await getPost(id)
   const { title, description, kategorie } = post
   return <EditPostForm id={id} title={title} description={description} kategorie={kategorie} />
}