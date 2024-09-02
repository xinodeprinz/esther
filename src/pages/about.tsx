import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div>This is the about page</div>
      <Link href="/contact" className="underline text-gray-200">
        click me
      </Link>
    </div>
  );
};

export default AboutPage;
