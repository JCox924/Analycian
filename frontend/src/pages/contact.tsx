import { useEffect, useState } from 'react'

type ContactForm = {
  name: string
  email: string
  message: string
}

const initialForm: ContactForm = { name: '', email: '', message: '' }

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm)

  useEffect(() => {
    document.title = 'Contact | Analycian'
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: send to backend
    console.log('Contact form submitted:', form)
    setForm(initialForm)
    alert('Thanks! We’ll get back to you soon.')
  }

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-text">Contact Us</h2>
        <p className="text-text">
          Reach out to the Analycian team for support or inquiries.
        </p>

        <form className="mt-4 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}

export default Contact
