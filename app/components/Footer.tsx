import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#2D2D2D] text-gray-300 py-4 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Shriramhgr Foods
      </p>

      <p className="mt-1">
        Designed by{" "}
        <a
          href="https://www.freepik.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-white"
        >
          Freepik
        </a>
      </p>
    </footer>
  );
}