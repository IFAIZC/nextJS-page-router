import Image from 'next/image'

export default function PostCard({img,title,description,alt}) {
  return (
    <div className="card bg-base-300 w-60 md:w-50 lg:w-70 xl:w-90 shadow-sm mb-5 hover:scale-105 transition-all duration-300 hover:shadow-xl">
      <div className="card-body h-40">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
      <figure>
        <Image
          src={img}
          alt={alt} 
          width={400}
          height={250}
          priority 
        />
      </figure>
    </div>
  )
}