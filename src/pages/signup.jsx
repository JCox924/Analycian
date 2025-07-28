const { Link } = ReactRouterDOM;

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const agreeTerms = formData.get('agreeTerms');

    if (!agreeTerms) {
      alert('Please agree to the terms and conditions.');
      return;
    }

    // TODO: Implement backend submission (e.g., AWS API Gateway)
    console.log('Sign-up submitted:', { name, email, password });
  };

  return (
    <main className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-text">Sign Up for Analycian</h2>
        <p className="text-text mb-4">
          Create an account and start your <strong>30-day free trial</strong> to explore data-driven insights.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-text">Full Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text">Password</label>
            <input
              type="password"
              name="password"
              className="mt-1 p-2 w-full border rounded-md"
              required
              minLength="6"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm text-text">
              I agree to the <Link to="/terms" className="text-secondary hover:underline">Terms and Conditions</Link>
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
          Already have an account? <Link to="/login" className="text-secondary hover:underline">Log in</Link>
        </p>
      </div>
    </main>
  );
};