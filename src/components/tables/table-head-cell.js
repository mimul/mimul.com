import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const TableHeadCell = styled.td`
  font-size: 15px;

  ${mediaqueries.tablet`
    font-size: 14px;
  `}
`;

export default TableHeadCell;
