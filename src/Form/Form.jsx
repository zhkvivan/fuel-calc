import styled from 'styled-components';

const Form = () => {
	const FormWrapper = styled.div`
		background-color: #fff;
		padding: 50px;
		border-radius: 50px;
		transform: translateY(-200px);
		box-shadow: 0px 0px 39px 2px rgba(67, 67, 67, 0.214);
	`;
	const FormRow = styled.div``;

	return (
		<Form>
			<FormWrapper>
				<FormRow></FormRow>
			</FormWrapper>
		</Form>
	);
};

export default Form;
