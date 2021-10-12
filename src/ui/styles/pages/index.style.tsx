import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const FormElementsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  max-width: 40.625rem;
  margin: 0 auto ${({ theme }) => theme.spacing(7)};
`;

export const ProfessionalsPaper = styled(Paper)`
  margin: 0 auto ${({ theme }) => theme.spacing(10)};
  padding: ${({ theme }) => theme.spacing(7)};
  ${({ theme }) => theme.breakpoints.down('md')} {
    &.MuiPaper-root {
      padding: 0;
      box-shadow: none;
    }
  }
`;

export const ProfessionalsContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing(2)};
  /* grid-template-rows: repeat(3, auto); */
  /* grid-template-areas:
    'user1 user2'
    'user3 user4'
    'user5 user6'; */
  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: 1fr;
    margin-left: ${({ theme }) => theme.spacing(-2)};
    margin-right: ${({ theme }) => theme.spacing(-2)};
    > :nth-of-type(odd) {
      background-color: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
