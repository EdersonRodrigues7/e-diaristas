import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '25rem' }}>
          <FooterTitle>Quem Somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            O e-diaristas te ajuda a encontrar um profissional perfeito para realizar a limpeza da
            sua casa. Garantimos os melhores profissionais com total segurança e praticidade! São
            milhares de clientes satisfeitos por todo o país.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'app store'} />
              </a>
            </li>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'play store'} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};

export default Footer;
