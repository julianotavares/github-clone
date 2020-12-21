import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  overflow: hidden;

  padding: 16px 20px 0 10px;
  border: 1px solid var(--border);
  border-radius: 6px;

  .wrapper {
    .scale-0 {
      fill: var(--calendar-scale-0);
    }
    .scale-1 {
      fill: var(--calendar-scale-1);
    }
    .scale-2 {
      fill: var(--calendar-scale-2);
    }
    .scale-3 {
      fill: var(--calendar-scale-3);
    }
    .scale-4 {
      fill: var(--calendar-scale-4);
    }

    width: 893px;
  }
`;
