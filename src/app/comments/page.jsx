export default async function Comments() {

  // ✅ Use Client-side if: you want loading states, dynamic fetching, or refreshing data.
  // ✅ Use Server-side if: you need SEO or always-fresh data before rendering.

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await res.json();

  return (
    <div className="flex-1 justify-center items-center flex">
      <div className="flex flex-col">
        {posts.map(post => (
            <h1 key={post.id}>
              Name : {post.name}
            </h1>
        ))}
      </div>
    </div>
  )
}