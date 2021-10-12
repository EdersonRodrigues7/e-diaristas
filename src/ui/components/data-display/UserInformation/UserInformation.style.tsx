import { Avatar, Rating, styled } from '@mui/material';

export const UserInformationContainer = styled('div')`
  display: grid;
  grid-template-columns: 3.75rem 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'avatar name'
    'avatar rating'
    'avatar description';
  gap: ${({ theme }) => theme.spacing(0.5) + ' ' + theme.spacing(2)};
  background-color: ${({ theme }) => theme.palette.grey['50']};
  padding: ${({ theme }) => theme.spacing(3)};
  align-items: center;
`;

export const UserName = styled('div')`
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: name;
`;

export const UserDescription = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: description;
`;

export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;

export const RatingStyled = styled(Rating)`
  font-size: 0.8rem;
  grid-area: rating;
`;
