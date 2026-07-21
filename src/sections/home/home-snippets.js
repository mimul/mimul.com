import TitleBar from "@components/title-bar";
import React from "react";
import SnippetRollItem from "@components/snippet-roll-item";
import { chunk } from "lodash";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const HomeSnippets = ({ snippets }) => {
  if (!snippets || snippets.length === 0) {
    return null;
  }

  const rowElements = [];
  let rowItemsCollection = [];
  rowItemsCollection = chunk(snippets, 3);

  rowItemsCollection.forEach((rowItems, index) => {
    rowElements.push(
      <div className="columns" key={index}>
        {rowItems.map((snippet) => {
          return (
            <div className="column" key={snippet.id}>
              <SnippetRollItem
                snippet={snippet}
                key={snippet.id}
              ></SnippetRollItem>
            </div>
          );
        })}
      </div>
    );
  });
  return (
    <HomeSnippetsBody className="section">
      <div className="container">
        <TitleBar title="Latest Snippets" linkTo="/snippets/" />
        {rowElements}
      </div>
    </HomeSnippetsBody>
  );
};

export default HomeSnippets;

const HomeSnippetsCss = (p) => css`
  .columns {
    align-items: stretch;
  }
  .column {
    display: flex;
    min-width: 0;
    .box {
      flex: 1;
      width: 100%;
      min-width: 0;
    }
    .media-content {
      min-width: 0;
    }
    .post-title {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p.ar-subtitle {
      line-height: 1.6;
      min-height: 4.8em;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

const HomeSnippetsBody = styled.section`
  ${HomeSnippetsCss}
`;
