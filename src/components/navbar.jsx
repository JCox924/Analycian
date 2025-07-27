const Navbar = () => (
  <header className="bg-primary text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">Analycian</h1>
        <p className="text-sm">Data-Driven Decisions for Small Businesses</p>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-secondary">Home</a></li>
          <li><a href="/about" className="hover:text-secondary">About</a></li>
          <li><a href="/contact" className="hover:text-secondary">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>