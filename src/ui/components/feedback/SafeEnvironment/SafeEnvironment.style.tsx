import { styled } from '@mui/material/styles';

export const SafeEnvironmentContainer = styled('div')`
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)} 0;
  font-size: 0.8rem;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.secondary};
`;
