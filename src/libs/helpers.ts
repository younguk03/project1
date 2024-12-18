import { Post } from "@/types/Post";

export function convertDocToObj(doc: Post) {
   return {
      _id: doc._id.toString(),
      title: doc.title,
      description: doc.description,
      kategorie: doc.kategorie,
      createdAt: doc.createdAt || '',
   }
}