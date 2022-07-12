import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const FormRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 32%;
`;

const Span = styled.span`
	margin-bottom: 5px;
	font-weight: bold;
`;

const Input = styled.input`
	margin: 20px 0;
	border: 1px solid #ced4da;
	border-radius: 10px;
	padding: 1rem;
`;

const Form = () => {
	const [price, setPrice] = useState('');
	const [consumption, setConsumption] = useState('');
	const [miles, setMiles] = useState('');

	return (
		<FormWrapper>
			<form>
				<FormRow>
					<FormGroup>
						<Span>💵 Цена топлива</Span>
						<Input value={price} onChange={(e) => setPrice(e.target.value)} />
					</FormGroup>
					<FormGroup>
						<Span>⏱ Расход (mpg)</Span>
						<Input
							value={consumption}
							onChange={(e) => setConsumption(e.target.value)}
						/>
					</FormGroup>
					<FormGroup>
						<Span>🚘 Миль пройдено</Span>
						<Input value={miles} onChange={(e) => setMiles(e.target.value)} />
					</FormGroup>
				</FormRow>
			</form>
		</FormWrapper>
	);
};

export default Form;
