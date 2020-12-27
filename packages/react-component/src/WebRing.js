import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import './webring.css';

const Site = ({ name, link, title }) => (
  <p><a href={link}>{name}</a> - {title}
  </p>
);

Site.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}).isRequired;

const WebRing = ({ slug }) => {
  const [data, setResponseData] = useState([]);
  // TODO think about persisting this somewhere
  const fetchData = useCallback(async () => {
    // request must be authenticated if private
    const res = await fetch(
      `https://openwebring.com/ring/${slug}.json`,
    );
    const resData = await res.json();
    console.info(resData);
    setResponseData(resData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const baseUrl = `https://openwebring.com/ring/${slug}`;

  return (
    <div className="center">
      <div>
        <h1>This site is a part of the {data.name} Webring</h1>
      </div>
      <div>
        <img border="0" height="132" src={data.icon} width="91" alt="as" />
        <br clear="all" />
      </div>
      <div>
        [<a href={baseUrl} target="_blank" rel="noreferrer">Skip Prev</a>]
        [<a href={baseUrl} target="_blank" rel="noreferrer">Prev</a>]
        [<a href={baseUrl} target="_blank" rel="noreferrer">Next</a>]
        <br />
        [<a href={baseUrl} target="_blank" rel="noreferrer">Skip Next</a>]
        [<a href={baseUrl} target="_blank" rel="noreferrer">Random</a>]
        [<a href={baseUrl} target="_blank" rel="noreferrer">Next 5</a>]
        [<a href={baseUrl} target="_blank" rel="noreferrer">List Sites</a>]
        <br />
        [<a href={baseUrl}>Join the {data.name} Webring</a>]
      </div>
      <div>
        {data.sites && data.sites.map(
          ({ name, link, title }) => <Site name={name} link={link} title={title} />,
        )}
      </div>
    </div>
  );
};

WebRing.propTypes = PropTypes.shape({
  slug: PropTypes.string.isRequired,
}).isRequired;

export default WebRing;
