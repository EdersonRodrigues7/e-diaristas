import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

export const HeaderAppBar = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.background.paper};
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.breakpoints.up('md')} {
    .MuiToolbar-root {
      height: 6.25rem;
    }
  }
  ${({ theme }) => theme.breakpoints.down('md')} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
      height: 4rem;
    }
  }
`;

export const HeaderLogo = styled('img')`
  height: 3rem;
  ${({ theme }) => theme.breakpoints.down('md')} {
    height: 1.8rem;
  }
`;
