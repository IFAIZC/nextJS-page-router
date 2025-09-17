export default function UserPost({ params }) {
  const id = parseInt(params.id); // Convert string to number
  let content;

  if (id === 1) {
    content = "This is post number 1";
  } else if (id === 2) {
    content = "This is post number 2";
  } else if (id === 3) {
    content = "This is post number 3";
  } else {
    content = "Post not found";
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <h1>{content}</h1>
    </div>
  );
}
