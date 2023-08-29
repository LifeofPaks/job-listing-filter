import React from "react";
import "./Job.scss";
const Job = (props) => {
  const {
    featured,
    id,
    logo,
    company,
    position,
    postedAt,
    location,
    contract,
    languages,
    tools,
    role,
    level
  } = props.item;
  
  let keywords = [level, role, ...languages, ...tools];

  return (
    <div className="jobs">
      <article className={`job ${featured ? "featuredList" : ""}`} key={id}>
        <section className="left">
          <img src={logo} alt="logo" />
          <div className="info">
            <div className="header">
              <p className="title">{company}</p>
              {props.item.new && <p className="new">new!</p>}
              {featured && <p className="featured">featured</p>}
            </div>

            <p className="stack">{position}</p>
            <div className="details">
              <p>{postedAt}</p> .<p>{contract}</p> .<p>{location}</p>
            </div>
          </div>
        </section>

        <section className="right">
          {keywords.map((keyword, id) => (
            <p key={id} onClick={ () => props.addFilteredItem(keyword)}>{keyword}</p>
          ))}
        </section>
      </article>
    </div>
  );
};

export default Job;
