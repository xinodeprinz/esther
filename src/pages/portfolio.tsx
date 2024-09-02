import Link from "next/link";
import React from "react";

const PortfolioPge = () => {
  return (
    <div>
      {" "}
      <div> welcome to our portfolio page</div>
      <Link href="/about" className="underline text-red-300">
        click on the link
      </Link>
    </div>
  );
};

export default PortfolioPge;
