import type { NextPage } from 'next';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from '@components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@mui/material';
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from 'ui/styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />
      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            value={'a'}
            label={'Digite seu CEP'}
            variant={'outlined'}
            fullWidth
          />
          <Typography color={'error'}>CEP inválido</Typography>
          <Button variant={'contained'} color={'secondary'} sx={{ width: '13.75rem' }}>
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
            <UserInformation
              name={'Ederson'}
              picture={'https://github.com/EdersonRodrigues7.png'}
              rating={3}
              description={'Campinas-SP'}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
}
