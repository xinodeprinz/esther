import Link from "next/link";
import React, { useState } from "react";

const HomePage = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div>Hello this the homepage</div>
      <Link href="/about" className="underline text-blue-300">
        click me to go to the about page
      </Link>
      <div className="mt-10 mx-5 flex gap-10">
        <button
          onClick={decrement}
          className="bg-black pb-1.5 text-white size-5 text-2xl flex justify-center items-center rounded-full"
        >
          -
        </button>
        <div>{count}</div>
        <button
          onClick={increment}
          className="bg-black pb-1.5 text-white size-5 text-xl flex justify-center items-center rounded-full"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default HomePage;
