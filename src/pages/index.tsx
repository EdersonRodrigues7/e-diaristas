import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from '@components/data-display/UserInformation/UserInformation';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container, CircularProgress } from '@mui/material';
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer
} from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';
import { ApiService } from 'data/services/ApiService';

export default function Home() {
  const {
    cep,
    setCep,
    cepValido,
    searchProfessionals,
    error,
    employees,
    search,
    loading,
    remainingEmployees
  } = useIndex();

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
            value={cep}
            label={'Digite seu CEP'}
            variant={'outlined'}
            onChange={event => setCep(event.target.value)}
            fullWidth
          />
          {error && <Typography color={'error'}>{error}</Typography>}
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '13.75rem' }}
            disabled={!cepValido || loading}
            onClick={() => searchProfessionals(cep)}
          >
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>
        {search &&
          (employees.length > 0 ? (
            <ProfessionalsPaper>
              <ProfessionalsContainer>
                {employees.map((item, index) => {
                  return (
                    <UserInformation
                      key={index}
                      name={item.nome_completo}
                      picture={item.foto_usuario}
                      rating={item.reputacao}
                      description={item.cidade}
                    />
                  );
                })}
              </ProfessionalsContainer>
              <Container sx={{ textAlign: 'center' }}>
                {remainingEmployees > 0 && (
                  <Typography sx={{ mt: 5 }}>
                    ...e mais {remainingEmployees}{' '}
                    {remainingEmployees > 1 ? 'profissionais' : 'profissional'} atendem ao seu
                    endereço.
                  </Typography>
                )}
                <Button variant={'contained'} color={'secondary'} sx={{ mt: 5 }}>
                  Contratar um profissional
                </Button>
              </Container>
            </ProfessionalsPaper>
          ) : (
            <Typography align={'center'} color={'textPrimary'}>
              Ainda não temos nenhum funcionário disponível em sua região 😥
            </Typography>
          ))}
      </Container>
    </div>
  );
}
