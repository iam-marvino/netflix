import React, { useState } from "react";
import add from "../assets/add.png";
import close from "../assets/close.png";

function Questions() {
  const [isOpenIndex, setIsOpenIndex] = useState(-1);

  function handleOpenClick(index) {
    if (isOpenIndex === index) {
      setIsOpenIndex(-1);
    } else {
      setIsOpenIndex(index);
    }
  }
  let data = [
    {
      type: "What is Netflix?",
      description: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
      id: "1",
      isOpen: false,
    },
    {
      type: "How much does Netflix cost?",
      description:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
      id: "2",
      isOpen: false,
    },
    {
      type: "Where can I watch?",
      description: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
      id: "3",
      isOpen: false,
    },
    {
      type: "How do I cancel?",
      description:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      id: "4",
      isOpen: false,
    },
    {
      type: "What can I watch on Netflix?",
      description:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      id: "5",
      isOpen: false,
    },
    {
      type: "Is Netflix good for kids?",
      description: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        `,
      id: "6",
      isOpen: false,
    },
  ];
  return (
    <section>
      <h1>Frequently Asked Questions</h1>
      {data.map((item, index) => (
        <div className="question" key={item.id}>
          <div className="one" onClick={() => handleOpenClick(index)}>
            <h2>{item.type}</h2>
            {isOpenIndex !== index ? (
              <img src={add} alt="add" />
            ) : (
              <img src={close} alt="close" />
            )}
          </div>
          {isOpenIndex === index && (
            <div className="two">
              <p style={{ whiteSpace: "pre-line" }}>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Questions;
