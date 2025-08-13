import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type SignUpForm = {
  name: string
  email: string
  password: string
  agreeTerms: boolean
}

const initialForm: SignUpForm = {
  name: '',
  email: '',
  password: '',
  agreeTerms: false,
}

const SignUp: React.FC = () => {
  const [form, setForm] = useState<SignUpForm>(initialForm)

  useEffect(() => {
    document.title = 'Sign Up | Analycian'
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, type, checked, value } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.agreeTerms) {
      alert('Please agree to the terms and conditions.')
      return
    }
    // TODO: send to backend
    console.log('Sign-up submitted:', form)
    setForm(initialForm)
    alert('Account created! Check your email to verify.')
  }

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-text">Sign Up for Analycian</h2>
        <p className="text-text mb-4">
          Create an account and start your <strong>30-day free trial</strong> to explore data-driven insights.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text">Full Name</label>
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
            <label htmlFor="email" className="block text-sm font-medium text-text">Email</label>
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
            <label htmlFor="password" className="block text-sm font-medium text-text">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              minLength={6}
              value={form.password}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="flex items-center">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={form.agreeTerms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm text-text">
              I agree to the{' '}
              <Link to="/terms" className="text-secondary hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-text text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-secondary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  )
}

export default SignUp
