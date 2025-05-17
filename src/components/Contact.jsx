import React from 'react'

const Contact = () => {
  return (
    <div>
      {/* contact section */}
      <section className="py-16 px-4" id="contact">
        <div className="container mx-auto text-center">
          <p className="text-lg text-gray-500 mb-2">How can you communicate?</p>
          <h6 className="text-3xl font-bold text-gray-800 mb-4">Contact Me</h6>
          <p className="text-gray-600 mb-10">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
          <form
            action="mailto:fouad,sh9880@gmail.com"
            className="w-full max-w-2xl mx-auto bg-white shadow-md rounded p-6"
          >
            <div className="flex flex-wrap -mx-2">
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <input
                  type="text"
                  size="50"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2 px-2 mb-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="w-full px-2 mb-4">
                <textarea
                  name="comment"
                  id="comment"
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Write Something"
                ></textarea>
              </div>
              <div className="w-full px-2 mt-3">
                <input
                  type="submit"
                  value="Send Message"
                  className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 cursor-pointer transition"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* end of contact section  */}
    </div>
  )
}

export default Contact
