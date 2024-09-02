import Link from "next/link";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <div>This is the contact page</div>
      <Link href="/about" className="underline text-orange-200 mr-4">
        Click here
      </Link>
    </div>
  );
};

export default ContactPage;
