import Link from "next/link"
import PostCard from "../../../components/postCard"
import { postData } from "../../../components/postData"

export default function Posts() {

  return (
    <div className="flex flex-col justify-center items-center flex-1 w-screen mt-25 mb-25">
      <h1 className="text-3xl font-bold">Today's News</h1>
      <div className="flex-row md:flex gap-5 mt-10">
        {postData.map(post => (
          <Link key={post.id} href={`/posts/${post.id}`}>
            <PostCard 
            title={post.title}
            description={post.description}
            img={post.img}
            alt={post.alt}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}