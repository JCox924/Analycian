const Contact = () => (
  <main className="container mx-auto p-4">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-text">Contact Us</h2>
      <p className="text-text">
        Reach out to the Analycian team for support or inquiries.
      </p>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-text">Name</label>
          <input type="text" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">Email</label>
          <input type="email" className="mt-1 p-2 w-full border rounded-md" />
        </div>
        <div>
          <label className="block text-sm font-medium text-text">Message</label>
          <textarea className="mt-1 p-2 w-full border rounded-md" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  </main>
);