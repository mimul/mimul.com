import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";

function Footer() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  );

  return (
    <footer className="ar-footer section">
      <div className="container">
        <div className="columns">
          <div className="column is-5 is-4-widescreen">
            <div className="summary">
              <Link to="/" className="brand">
                <div className="brand-icon">
                  <img
                    alt="Mimul"
                    role="presentation"
                    src="/img/favicon-32x32.png"
                  />
                </div>
                <div className="brand-content">
                  <div className="brand-title"> Mimul </div>
                  <div className="brand-subtitle">Software Engineer</div>
                </div>
              </Link>
              <hr className="spacer"></hr>
              <p> {site.siteMetadata.description}</p>
            </div>
          </div>
          <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
            <div className="columns">
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label"> Website </p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about/">About</Link>
                    </li>
                    <li>
                      <Link to="/blog/">Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Recommended</p>
                  <ul className="menu-list">
                    <li>
                      <Link to="/recommended/stories/">Developer Stories</Link>
                    </li>
                    <li>
                      <Link to="/recommended/services/">Tools & Services</Link>
                    </li>
                    <li>
                      <Link to="/recommended/videos/">Videos</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <div className="menu">
                  <p className="menu-label">Connect with me</p>
                  <ul className="menu-list">
                    <li className="has-margin marb-dot5">
                      <a
                        className="twitter-follow-button"
                        href="https://twitter.com/mimul"
                        data-size="large"
                        data-show-screen-name="false"
                      >
                        Follow @mimul
                      </a>
                    </li>
                    <li className="has-margin">
                      <iframe
                        src="https://ghbtns.com/github-btn.html?user=mimul&type=follow&count=true&size=large"
                        frameBorder="0"
                        scrolling="0"
                        width="230"
                        height="30"
                        title="Follow @mimul on GitHub"
                      ></iframe>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
