import { render, fireEvent, waitFor } from '@testing-library/react'

import { LoginForm } from '.'

import { Provider } from 'react-redux'

import { Store } from '@reduxjs/toolkit'

import { store as mockStore } from '../../../../store'

import { heading, label, msgError, placeholder, submitButton } from '../constants'

jest.mock('@next/font/google', () => {
    return {
        Oswald() {
            return '__className_925ed4'
        },
        Open_Sans() {
            return '__className_ff1552'
        }
    }
})

function createTestStore() {
    return mockStore
  }

let store: Store;

describe('Form component', () => {
    
    beforeEach(() => {
        store = createTestStore();
    })   

    it('should be rendered a heading tag', () => {
        const {getByTestId, getByText} = render(<Provider store={store}><LoginForm /></Provider>);
        expect(getByTestId('heading')).toBeTruthy();
        expect(getByText(heading)).toBeInTheDocument();
    })

    it('should be rendered a label tag', () => {
        const {getByTestId, getByText} = render(<Provider store={store}><LoginForm /></Provider>);
        expect(getByTestId('label')).toBeTruthy();
        expect(getByText(label)).toBeInTheDocument();
    })

    it('should be rendered a submit of button', () => {
            const { getByText } = render(<Provider store={store}><LoginForm /></Provider>)
            expect(getByText(submitButton)).toBeInTheDocument();
    })

    it('should be verified if button is disabled', () => {
            const { getByText } = render(<Provider store={store}><LoginForm /></Provider>)
            expect(getByText(submitButton)).toBeDisabled();
    })

    it('should be render input element where value is string and return is invalid', async () => {
        const { getByText, getByPlaceholderText } = render(<Provider store={store}><LoginForm /></Provider>)

        const inputElement = getByPlaceholderText(placeholder);

        fireEvent.change(inputElement, {
            target: { value: "teste123" }
        });

        await waitFor(() => {
            expect(getByText(msgError)).toBeInTheDocument();
            expect(getByText(submitButton)).toBeDisabled();
        });

    })

    it('should be render input element where value is number and return is valid', async () => {
        const { getByText, queryByText, getByPlaceholderText } = render(<Provider store={store}><LoginForm /></Provider>)

        const inputElement = getByPlaceholderText(placeholder);

        fireEvent.change(inputElement, {
            target: { value: "12345678900" }
        });

        await waitFor(() => {
            expect(queryByText(msgError)).not.toBeInTheDocument();
            expect(getByText(submitButton)).toBeEnabled();
        });
        
    })

    it('should be render button loading', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Provider store={store}><LoginForm /></Provider>)

        const inputElement = getByPlaceholderText(placeholder);

        fireEvent.change(inputElement, { 
            target: { value: '12345678900'}
        });

        const buttonElement = getByTestId('button-enabled');

        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect(getByTestId('button-loading')).toBeInTheDocument();
        })

    })

    it('should be exhibited the input value when click on eye button', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Provider store={store}><LoginForm /></Provider>)

        const inputElement = getByPlaceholderText(placeholder);

        fireEvent.change(inputElement, { 
            target: { value: '12345678900'}
        });

        const buttonElement = getByTestId('input-hidden');

        fireEvent.click(buttonElement);

        await waitFor(() => {
            expect((inputElement as HTMLInputElement).value).toBe('12345678900');
        })

    })

    it('should be exhibited icon eye visible', async () => {
        const { getByPlaceholderText, getByTestId, debug } = render(<Provider store={store}><LoginForm /></Provider>)

        const inputElement = getByPlaceholderText(placeholder)

        fireEvent.change(inputElement, {
            target: { value: '12345678900' }
        })

        const buttonElement = getByTestId('input-hidden');

        fireEvent.click(buttonElement);

        expect(getByTestId('icon-eye-visible')).toBeInTheDocument();
    })
})