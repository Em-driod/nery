export default function Contact() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">Contact Us</h1>
        <p className="text-center text-gray-600 mt-2">
          Have questions? Get in touch with our team.
        </p>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Support Email:</h2>
          <p className="text-gray-700">support@luzai.com</p>
        </div>
  
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">WhatsApp Support:</h2>
          <a
            href="https://wa.me/07016969298"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    );
  }
  