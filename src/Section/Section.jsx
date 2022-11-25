import styled from 'styled-components';
import { Container } from '../Container';
import Form from '../Form/Form';

const SectionWrapper = styled.section`
  /* height: 500px; */
  transform: translateY(-200px);
  background-color: #fff;
  padding: 50px;
  border-radius: 50px;
  box-shadow: 0px 0px 39px 2px rgba(67, 67, 67, 0.214);
`;

const H1 = styled.h1`
  font-size: 28px;
  text-align: center;
`;

const Section = () => {
  return (
    <Container>
      <SectionWrapper>
        <H1>⛽ Расчет расхода топлива</H1>
        <Form />
      </SectionWrapper>
    </Container>
  );
};

export default Section;
