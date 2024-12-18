'use server'

import { convertDocToObj } from "@/libs/helpers"
import connectMongoDB from "@/libs/mongodb"
import Post from "@/models/post"
import { revalidatePath } from "next/cache"

// Create
export async function createPost(title:string, description:string, kategorie:string) {
   try {
      await connectMongoDB()
      const doc = await Post.create({title, description, kategorie})
      revalidatePath('/')
      return { success:true, writing:convertDocToObj(doc)}
   } catch (error) {
      throw new Error(`Create Fail... ${error}`)
   }
}

// Edit
export async function UpdatePost(id:string,title:string, description:string, kategorie:string) {
   try {
      await connectMongoDB()
      const doc = await Post.findByIdAndUpdate(
         id,
         {title,description,kategorie},
         {new:true}
      )
      if (!doc) throw new Error('Post can not find.')
      revalidatePath('/')
   return {success:true, post:convertDocToObj(doc)}
   } catch (error) {
      throw new Error(`Writing edit fail ${error}`)
   }
}

// GET by ID
export async function getPost(id:string) {
   try {
      await connectMongoDB()
      const doc = await Post.findById(id)
      if (!doc){
         throw new Error('Post can not find.')
      }
      return {success:true, post:convertDocToObj(doc)}
   } catch (error) {
      console.log(error)
      throw new Error('Post can not find!')
   }
}

// GET all post
export async function getAllPosts() {
   try {
      await connectMongoDB()
      const docs = await Post.find({}).sort({createdAt:-1})
      const posts = docs.map((doc) => convertDocToObj(doc))
      return {success:true, posts}
   } catch (error) {
      console.log(error)
      throw new Error('There are no posts')
   }
}

// Delete
export async function deletePost(id:string) {
   try {
      await connectMongoDB()
      const doc = await Post.findByIdAndDelete(id)
      if(!doc) throw new Error('Post can not find...')
   } catch (error) {
      throw new Error(`Deletion failed ${error}`)
   }
}