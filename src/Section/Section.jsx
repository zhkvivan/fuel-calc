import styled from 'styled-components';
import { Container } from '../Container';

const Section = () => {
	const SectionWrapper = styled.section`
		height: 500px;
	`;

	return (
		<Container>
			<SectionWrapper>
				<h1>⛽ Расчет расхода топлива</h1>
			</SectionWrapper>
		</Container>
	);
};

export default Section;
