import styled from 'styled-components';
import { STAGE_WIDTH, STAGE_HEIGHT } from '../../setup';

export const StyledStage = styled.div`
  display: grid;
  grid-template-columns: repeat(${STAGE_WIDTH}, 30px);
  grid-template-rows: repeat(${STAGE_HEIGHT}, 30px);
  grid-gap: 1px;
  border: 1px solid #8398f1;
  background: rgba(34, 34, 34, 0.2);
  @media(max-width: 500px) {
    grid-template-columns: repeat(${STAGE_WIDTH}, 20px);
    grid-template-rows: repeat(${STAGE_HEIGHT}, 20px);
  }
`;