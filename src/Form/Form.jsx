import { useState } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../Globals';
import Button from '../Button/Button';

const FormWrapper = styled.div`
  min-height: 300px;
  max-width: 60%;
`;

const FormRow = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  ${({ bottom }) => {
    if (bottom) {
      return `
				flex-wrap: wrap;
				justify-content: space-evenly;
			`;
    }
  }}
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  /* justify-content: flex-start; */
  /* align-items: center; */
`;

const InputLabelGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 10px; */
`;

const InputLabel = styled.span`
  /* margin-bottom: 15px; */
  font-size: 20px;
  font-weight: bold;
  /* margin-right: 30px; */

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
  font-size: 18px;
  margin: 10px 0;
  border: none;
  border: 1px solid #ced4da;
  padding: 0.5rem 1rem;
  border-radius: 10px;

  &:focus-visible {
    outline: none;
    border: 1px solid ${primaryColor};
  }

  &::placeholder {
    opacity: 0.5;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    display: none;
  }
`;

const ResultWrapper = styled.div`
  text-align: center;
`;

const Form = () => {
  const [price, setPrice] = useState('');
  const [consumption, setConsumption] = useState('');
  const [miles, setMiles] = useState('');

  const priceSuggestion = [150, 160, 170, 180, 190, 200];
  const consumptionSuggestion = [25, 30, 35, 40, 45, 50, 55, 65, 70];
  const milesSuggestion = [30, 50, 100, 150, 300, 500, 1000];

  const applyPlaceholderValue = (e, setInput) => {
    console.log(e);
    setInput(e.target.innerText);
  };

  const FormBlock = ({
    label,
    value,
    setter,
    placeholder,
    suggestionArr,
    kilometr,
  }) => {
    return (
      <FormGroup>
        <InputLabelGroup>
          <InputLabel>{label}</InputLabel>
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
        </InputLabelGroup>
        <Input
          value={value}
          onChange={(e) => setter(e.target.value)}
          type={'number'}
          placeholder={placeholder}
          onFocus={(e) => (e.target.placeholder = '')}
          onBlur={(e) => (e.target.placeholder = placeholder)}
        />
      </FormGroup>
    );
  };

  return (
    <FormWrapper>
      {FormBlock({
        label: '💵 Цена топлива (в пенсах)',
        value: price,
        placeholder: 'Введи цену как на заправке',
        suggestionArr: priceSuggestion,
        setter: setPrice,
      })}
      {FormBlock({
        label: '⏱ Расход (mpg)',
        value: consumption,
        placeholder: 'Расход в милях на галлон',
        suggestionArr: consumptionSuggestion,
        setter: setConsumption,
      })}
      {FormBlock({
        label: '🚘 Миль пройдено',
        value: miles,
        placeholder: 'Миль, не километров',
        suggestionArr: milesSuggestion,
        setter: setMiles,
      })}
    </FormWrapper>
  );
};

export default Form;
