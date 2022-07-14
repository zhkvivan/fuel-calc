import styled from 'styled-components';
import './App.css';
import { Section } from './Section';
import { primaryColor } from './Globals';

const TopSection = styled.section`
	height: 300px;
	background-color: ${primaryColor};
`;

const App = () => {
	return (
		<>
			<TopSection />
			<Section />
		</>
	);
};

export default App;
