import Header from "../components/Header";
import styles from "./home.module.css"
import PostsList from "@/components/PostsList";
import { Suspense } from "react";
import { getAllPosts } from "@/action/postActions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'WebDev Topics | MongoDB CRUD Example',
  description: 'A simple CRUD application susing Next.js and MongoDB',
}

export default async function Home() {
  const { posts } = await getAllPosts()
  return (
    <div className={styles.main}>
      <div>
        <Header />
      </div>
      <div>
        <h1 className='text-3xl font-bold mb-2 m-2 mt-10 ml-60 '>내 노트장</h1>
        <div className="m-10 mr-16 ml-16">
          <Suspense fallback={<div>로딩 중...</div>}>
            <PostsList posts={posts} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
