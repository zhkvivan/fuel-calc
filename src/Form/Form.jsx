import { useState } from 'react';
import styled from 'styled-components';

const FormWrapper = styled.div``;

const FormRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 32%;
`;

const InputLabel = styled.span`
	margin-bottom: 15px;
	font-weight: bold;
`;

const SuggestionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-evenly;
	/* padding: 0 5px; */
`;

const Suggestion = styled.span`
	margin: 5px;
	text-decoration: underline;
	color: #079bcc;
	cursor: pointer;
	font-size: 14px;
`;

const Input = styled.input`
	margin: 10px 0;
	border: 1px solid #ced4da;
	border-radius: 10px;
	padding: 1rem;

	&::placeholder {
		opacity: 0.5;
	}
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		display: none;
	}
`;

const Form = () => {
	const [price, setPrice] = useState('');
	const [consumption, setConsumption] = useState('');
	const [miles, setMiles] = useState('');

	const applyPlaceholderValue = (e, setInput) => {
		console.log(e);
		setInput(e.target.innerText);
	};

	const priceSuggestion = [150, 160, 170, 180, 190, 200];
	const consumptionSuggestion = [30, 35, 40, 45, 50, 55];

	return (
		<FormWrapper>
			<form>
				<FormRow>
					<FormGroup>
						<InputLabel>💵 Цена топлива</InputLabel>
						<SuggestionWrapper>
							{priceSuggestion.map((number, index) => {
								return (
									<Suggestion
										onClick={(e) => applyPlaceholderValue(e, setPrice)}
										key={index}
									>
										{number}
									</Suggestion>
								);
							})}
						</SuggestionWrapper>
						<Input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type={'number'}
							placeholder={'180'}
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = '180')}
						/>
					</FormGroup>
					<FormGroup>
						<InputLabel>⏱ Расход (mpg)</InputLabel>
						<SuggestionWrapper>
							{consumptionSuggestion.map((number, index) => {
								return (
									<Suggestion
										onClick={(e) => applyPlaceholderValue(e, setConsumption)}
										key={index}
									>
										{number}
									</Suggestion>
								);
							})}
						</SuggestionWrapper>
						<Input
							value={consumption}
							onChange={(e) => setConsumption(e.target.value)}
							type={'number'}
							placeholder={'32'}
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = '32')}
						/>
					</FormGroup>
					<FormGroup>
						<InputLabel>🚘 Миль пройдено</InputLabel>
						<Input
							value={miles}
							onChange={(e) => setMiles(e.target.value)}
							type={'number'}
							placeholder={'100'}
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = '100')}
						/>
					</FormGroup>
				</FormRow>
			</form>
		</FormWrapper>
	);
};

export default Form;
