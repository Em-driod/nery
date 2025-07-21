export default function About() {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold text-center text-blue-600">About Luz</h1>
        <p className="text-center text-gray-600 mt-2">
          Luz is an AI-powered resume builder designed to help job seekers craft top-tier resumes effortlessly.
        </p>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            At Luz, we believe everyone deserves a **professionally crafted resume** that showcases their **skills and experience**.
            Our AI technology ensures that every resume is **tailored, optimized, and job-ready**.
          </p>
        </div>
  
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Why Choose Luz?</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>AI-generated **resumes** based on industry standards.</li>
            <li>Custom suggestions to **enhance your application**.</li>
            <li>Real-time feedback & **resume optimization**.</li>
            <li>Support for **all job categories** with a focus on tech.</li>
          </ul>
        </div>
      </div>
    );
  }
  