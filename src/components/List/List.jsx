import React from "react";
import "./List.scss";
import { Data } from "../../db/data";
import Logo from "../../images/loop-studios.svg";

const List = () => {
  return (
    <div className="lists">
      {Data.map((item) => (
        <article
          className={`list ${item.featured ? "featuredList" : ""}`}
          key={item.id}
        >
          <section className="left">
            <img src={item.logo} alt="logo" />
            <div className="info">
              <div className="header">
                <p className="title">{item.company}</p>
                {item.new && <p className="new">new!</p>}
                {item.featured && <p className="featured">featured</p>}
              </div>

              <p className="stack">{item.position}</p>
              <div className="details">
                <p>{item.postedAt}</p> .<p>{item.contract}</p> .
                <p>{item.location}</p>
              </div>
            </div>
          </section>

          <section className="right">
            <p>{item.role}</p>
            <p>{item.level}</p>
            {item.languages.map((language) => (
              <p>{language}</p>
            ))}

            {item.tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </section>
        </article>
      ))}
    </div>
  );
};

export default List;
