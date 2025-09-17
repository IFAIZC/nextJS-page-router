// "use client" //for client side interactivity

import Link from "next/link"
import PostCard from "../../../components/postCard"

export default function Posts() {

  // fake data

  const postData = [
    {
      id: 1, 
      title: "Breaking News Today",
      img: "/news.jpg", 
      description: "This is a sample news article description", 
      alt: "Sample news image"
    },
    {
      id: 2, 
      title: "Tech Update",
      img: "/tech.jpg", 
      description: "Latest technology trends and updates", 
      alt: "Technology image"
    },
    {
      id: 3, 
      title: "Sports Highlights",
      img: "/sports.jpg", 
      description: "Today's sports news and highlights", 
      alt: "Sports image",
      link: "x"
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen mt-25 mb-25">
      <h1 className="text-3xl font-bold">Today's News</h1>
      <div className="flex-row md:flex gap-5 mt-10">
        {postData.map(post => (
          <Link href="">
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