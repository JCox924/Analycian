import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Analycian. All rights reserved.</p>
        <p className="text-sm">Helping small businesses make data-driven decisions.</p>
      </div>
    </footer>
  )
}

export default Footer
