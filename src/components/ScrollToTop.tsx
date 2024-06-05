import { useState, useEffect } from "react";

export default function BasicExample(): JSX.Element {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          type="button"
          onClick={backToTop}
          className={` ${showButton ? `inline-block` : `hidden`
            } fixed bottom-6 right-6 p-3 bg-[#FF5731] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#FF5731] hover:shadow-lg focus:bg-[#FF5731] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#FF5731] active:shadow-lg transition duration-150 ease-in-out`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024">
            <rect width="1024" height="1024" fill="none" />
            <path fill="currentColor" d="M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8l316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496" />
          </svg>
        </button>
      )}
    </>
  );
}