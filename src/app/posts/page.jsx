import Link from "next/link"
import PostCard from "../../../components/postCard"
import { postData } from "../../../components/postData"
import { Suspense } from "react"
import Loading from "../../../components/loading"

export default function Posts() {

  return (
    <div className="flex flex-col justify-start items-center flex-1 w-screen mt-25 mb-25">
      <h1 className="text-3xl font-bold mb-15 mt-5">Today's News</h1>
      <div className="flex-row md:flex gap-5 mt-10">


        {/* to use suspense feature here */}
        <Suspense fallback={<Loading/>}>
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
        </Suspense>
      </div>
    </div>
  )
}