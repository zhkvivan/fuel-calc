import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../Globals';
import Button from '../Button/Button';

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

	const FormBlock = ({ label, input, setter, placeholder, suggestionArr }) => {
		return (
			<FormGroup>
				<InputLabel>{label}</InputLabel>
				<Input
					value={input}
					onChange={(e) => setter(e.target.value)}
					type={'number'}
					placeholder={placeholder}
					onFocus={(e) => (e.target.placeholder = '')}
					onBlur={(e) => (e.target.placeholder = placeholder)}
				/>
				<SuggestionWrapper>
					{suggestionArr.map((number, index) => {
						return (
							<Suggestion
								onClick={(e) => applyPlaceholderValue(e, setter)}
								key={index}
							>
								{number}
							</Suggestion>
						);
					})}
				</SuggestionWrapper>
			</FormGroup>
		);
	};

	const sumbitHandler = (e) => {
		e.preventDefault();
		console.log('haha');
	};

	const resetHandler = (e) => {
		e.preventDefault();
		console.log('haha');
	};

	return (
		<FormWrapper>
			<form>
				<FormRow>
					<FormBlock
						label={'💵 Цена топлива (в пенсах)'}
						input={price}
						setter={setPrice}
						placeholder={'180'}
						suggestionArr={priceSuggestion}
					/>
					<FormBlock
						label={'⏱ Расход (mpg)'}
						input={consumption}
						setter={setConsumption}
						placeholder={'32'}
						suggestionArr={consumptionSuggestion}
					/>
					<FormBlock
						label={'🚘 Миль пройдено'}
						input={miles}
						setter={setMiles}
						placeholder={'100'}
						suggestionArr={milesSuggestion}
					/>
				</FormRow>
				<FormRow>
					<Button label={'Посчитать'} primary handler={sumbitHandler} />
					<Button label={'Сбросить'} handler={resetHandler} />
				</FormRow>
			</form>
		</FormWrapper>
	);
};

export default Form;
