import { submitName } from "../../../components/submitName"

export default function Contact() {
 return (
  <div className="flex flex-col flex-1 justify-center items-center">

    <div className="bg-base-300 p-10 rounded-4xl">
      {/* top header */}
      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="font-bold text-4xl">Let's connect</h1>
        <p className="font-extralight mt-3">Send us a message and we'll get back to you!</p>
      </div>

      {/* input form */}
      <form className="flex flex-col gap-4 w-full max-w-md p-6" action={submitName}>
        <label>Name</label>
        <input
          type="name"
          name="name"
          placeholder="Enter your name"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <label>Your Message</label>
        <input
          type="message"
          name="message"
          placeholder="Enter your message"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
          required
        />

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
 )
}

