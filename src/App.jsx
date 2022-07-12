import styled from 'styled-components';
import './App.css';
import { Section } from './Section';

const TopSection = styled.section`
	height: 300px;
	background-color: lightblue;
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
