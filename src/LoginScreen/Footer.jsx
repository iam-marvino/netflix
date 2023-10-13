import React from "react";
import downIcon from "../assets/images/down-icon.png";

function Footer() {
  let list = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  let columnOne = list.slice(0, 4);
  let columnTwo = list.slice(4, 8);
  let columnThree = list.slice(8, 12);
  let columnFour = list.slice(12, 16);

  return (
    <footer>
      <div className="wrapper">
        <p>Questions? Contact us.</p>
        <div className="listContainer">
          <ul>
            {columnOne.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            {columnTwo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            {columnThree.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            {columnFour.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <button>
            English
            <img src={downIcon} alt="downIcon" />
          </button>
          <p>Netflix Nigeria</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
