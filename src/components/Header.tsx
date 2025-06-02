import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="relative w-full h-56 flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}>
      <div className="absolute inset-0 bg-primary-900/60" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg font-serif">Agent Course</h1>
      </div>
    </header>
  );
};

export default Header;