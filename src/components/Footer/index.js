import React from "react";

function Footer() {
  return (
    <footer>
      <ul>
        <li className="footer-li">
          <a
            className="footer-link"
            href="https://github.com/bret-short"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="footer-li">
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/bret-short-50144a34/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="footer-li">
          <a
            className="footer-link"
            target="blank"
            rel="noreferrer"
            href="https://twitter.com/raptorsacb"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
