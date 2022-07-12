import styled from 'styled-components';

const ContainerWrap = styled.div`
	margin: 0px auto;
	max-width: 800px;
`;

const Container = ({ children }) => {
	return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;
