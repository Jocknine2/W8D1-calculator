import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('calculate add', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator_add')
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('calculator subtract', () => {
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const button4 = container.getByTestId('number4');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('calculator multiply', () => {
    const button3 = container.getByTestId('number3');
    const multiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals); 
    expect(runningTotal.textContent).toEqual('15');
  });

  it('calculator divide', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const divide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('3');
  });

  it('calculator buttonClick', () => {
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(button3);
    fireEvent.click(button3);
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('3333');
  });

  it('calculator operatorClick', () => {
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator_add');
    const button2 = container.getByTestId('number2');
    const multiply = container.getByTestId('operator-multiply');
    const equals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button2);
    fireEvent.click(multiply);
    fireEvent.click(button2);
    fireEvent.click(equals);
    expect(runningTotal.textContent).toEqual('6')
  })

  it('calculator clearClick', () => {
    const button3 = container.getByTestId('number3');
    const add = container.getByTestId('operator_add');
    const button4 = container.getByTestId('number4');
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(clear);
    expect(runningTotal.textContent).toEqual('0')
  })
})

