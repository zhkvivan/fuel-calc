import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../Globals';

const FormWrapper = styled.div``;

const FormRow = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: stretch;
`;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width: 29%;
`;

const InputLabel = styled.span`
	/* margin-bottom: 15px; */
	font-size: 14px;

	@media (max-width: 715px) {
		min-height: 36px;
	}
`;

const SuggestionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 90%;
	/* justify-content: space-evenly; */
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
	font-size: 16px;
	margin: 10px 0;
	border: none;
	border-bottom: 1px solid #ced4da;
	padding: 0.5rem 0.2rem;

	&:focus-visible {
		outline: none;
		border-bottom: 1px solid ${primaryColor};
	}

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
	const milesSuggestion = [30, 50, 150, 300, 500, 1000];

	return (
		<FormWrapper>
			<form>
				<FormRow>
					<FormGroup>
						<InputLabel>💵 Цена топлива (в пенсах)</InputLabel>

						<Input
							value={price}
							onChange={(e) => setPrice(e.target.value)}
							type={'number'}
							placeholder={'180'}
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = '180')}
						/>
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
					</FormGroup>
					<FormGroup>
						<InputLabel>⏱ Расход (mpg)</InputLabel>

						<Input
							value={consumption}
							onChange={(e) => setConsumption(e.target.value)}
							type={'number'}
							placeholder={'32'}
							onFocus={(e) => (e.target.placeholder = '')}
							onBlur={(e) => (e.target.placeholder = '32')}
						/>
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
						<SuggestionWrapper>
							{milesSuggestion.map((number, index) => {
								return (
									<Suggestion
										onClick={(e) => applyPlaceholderValue(e, setMiles)}
										key={index}
									>
										{number}
									</Suggestion>
								);
							})}
						</SuggestionWrapper>
					</FormGroup>
				</FormRow>
			</form>
		</FormWrapper>
	);
};

export default Form;
