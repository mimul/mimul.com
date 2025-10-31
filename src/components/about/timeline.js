/** @jsx jsx */
import { jsx } from "theme-ui";

import { Component } from "react";
import { FaFlag } from "react-icons/fa";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const TitleCss = (p) => css`
  color: ${p.theme.colors.strongText} !important;
`;

const Title = styled.h2`
  ${TitleCss}
`;
const Subtitle = styled.h4`
  ${TitleCss}
`;
export default class Timeline extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="divider is-centered"></div>
          <Title className="title is-semibold has-text-centered is-spaced">
            Career Path
          </Title>
          <Subtitle className="subtitle is-6 has-text-centered is-compact">
            An overview of my career timeline shown below.
          </Subtitle>

          <div className="timeline is-centered mt-3">
            <header className="timeline-header">
              <span className="tag is-medium is-primary">Now</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  March 2019
                </p>
                <p>Fittobe - CTO</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2016</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info	has-text-weight-bold">
                  December 2010
                </p>
                <p>WiseEco — Co-Founder and Software Engineer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2010</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  August 2000
                </p>
                <p>KTH(KT Hitel) — Software Engineer</p>
              </div>
            </div>
            <header className="timeline-header">
              <span className="tag is-primary">2000</span>
            </header>
            <div className="timeline-item">
              <div className="timeline-marker is-icon">
                <FaFlag></FaFlag>
              </div>
              <div className="timeline-content">
                <p className="heading has-text-info has-text-weight-bold">
                  January 1999
                </p>
                <p>
                  DaeWoo Telecom — Software Engineer
                </p>
              </div>
            </div>
            <div className="timeline-header">
              <span className="tag is-medium is-primary">Start</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
