import styled from "@emotion/styled";
// tslint:disable-next-line: no-implicit-dependencies
import mediaqueries from "@styles/media";

const TableCell = styled.td`
  font-size: 15px;

  ${mediaqueries.tablet`
    font-size: 14px;
  `}
`;

export default TableCell;
