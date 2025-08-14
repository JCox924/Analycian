import React from 'react'
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-primary text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold">Analycian</h3>
            <p className="text-sm opacity-90">
              Helping small businesses make data-driven decisions.
            </p>
          </div>

          {/* Quick links */}
          <nav className="md:justify-center">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="md:justify-self-end">
            <Link
              to="/signup"
              className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/20 transition"
            >
              Start free trial
            </Link>
          </div>
        </div>

        <hr className="my-6 border-white/20" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-90">
          <p>© {year} Analycian. All rights reserved.</p>
          <p>Built for clarity, speed, and trust.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
