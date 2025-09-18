import BackButton from "../../../../components/backButton";
import { postData } from "../../../../components/postData";
import { Share } from "lucide-react";
import Image from "next/image";

export default function UserPost({ params }) {
  const { id } = params;
  
  const post = postData.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">Post not found!</h1>
      </div>
    );
  }

  return (
    <div className="h-screen py-8">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          
          {/* Meta information */}
          <div className="flex items-center text-sm text-base-content font-semibold mb-6">
            <time className="mr-4">
              {post.date || "September 18, 2025"}
            </time>
          </div>
        </header>

        {/* Featured Image */}
        {post.img && (
          <div className="mb-8">
            <Image
              src={post.img} 
              alt={post.title}
              className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-md"
              width={400}
              height={250}
              priority 
            />
          </div>
        )}

        {/* Blog Content */}
        <div className="bg-base-300 rounded-lg shadow-sm p-8 mb-8">
          {/* Description/Excerpt */}
          {post.description && (
            <div className="text-lg text-base-content mb-6 leading-relaxed font-light border-l-4 border-blue-500 pl-6 italic">
              {post.description}
            </div>
          )}
          
          {/* Main Content */}
          <div className="prose prose-lg max-w-none">
            {post.content ? (
              <div 
                className="text-base-content leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <div className="text-base-content leading-relaxed">
                <p className="mb-4">
                  This is where the main blog content would go. You can expand your post data 
                  to include a full content field with the actual blog post text.
                </p>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t">
          <BackButton/>
        </div>
      </article>
    </div>
  );
}
