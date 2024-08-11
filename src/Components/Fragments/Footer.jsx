import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-white py-8"
      style={{ backgroundImage: "url('/footer.svg')" }}
    >
      <div className="text-center">
        <h2 className="text-lg font-semibold">Ikuti Kami di</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ig.png" alt="Instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/yt.png" alt="YouTube" className="h-8 w-8" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/x.png" alt="Twitter" className="h-8 w-8" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/fb.png" alt="Facebook" className="h-8 w-8" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/git.png" alt="GitHub" className="h-8 w-8" />
          </a>
        </div>
        <p className="mt-4">© Cyanakaya, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
