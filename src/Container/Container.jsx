import styled from 'styled-components';

const Container = ({ children }) => {
	const ContainerWrap = styled.div`
		margin: 0px auto;
		max-width: 800px;
		}
	`;
	return <ContainerWrap>{children}</ContainerWrap>;
};

export default Container;
