'use client'
import { useState } from "react"
import styles from './postsList.module.css'
import { Post } from "@/types/Post"
import RemoveBtn from "./RemoveBtn"
import Link from "next/link"
import { useSession } from "next-auth/react"


interface PostsListProps {
   posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
   const [loading] = useState('')
   const [error] = useState<string | null>(null);
   const { status, data: session } = useSession();
   console.log(session)
   if (loading) return (
      <div className={styles.loading_or_error}>
         로딩중입니다!
      </div>
   )
   if (error) return (
      <div className={styles.loading_or_error}>
         Error {error}
      </div>
   )

   return (
      <>
         <div>
            {posts && posts.map((post) => (
               <div key={post._id}  className={styles.post_list}>
                  <div className='font-bold pr-4'>{post.title}</div>
                  
                  <div className={styles.description}>{post.description}</div>
                  <div className={styles.kategorie}>-{post.kategorie}-</div>
                  {status === 'authenticated' && (
                     <div>
                        <span className={styles.remove_btn}><RemoveBtn id={post._id} /></span>
                     <span className={styles.edit_btn}><Link href={`/editPost/${post._id}`}>수정</Link></span>
                  </div>
                  )}
               </div>
            ))}

         </div>
      </>
   )
}

