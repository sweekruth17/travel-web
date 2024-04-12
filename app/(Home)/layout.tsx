import React from "react";
import Navbar from "../_components/Navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default LandingPageLayout;
