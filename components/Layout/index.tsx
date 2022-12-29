import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row bg-gray-200 min-h-screen">
      <Navigation/>
      <div className='w-full'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
