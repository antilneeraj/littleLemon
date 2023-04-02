import {render, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Form from './components/Form.js';

window.alert = jest.fn();
test('require check', async () => {
  window.alert.mockClear()

  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  )

  const submitBtn = screen.getByTestId('submit');
  const phone = screen.getByTestId('phone');
  const name = screen.getByTestId('name');
  const guest = screen.getByTestId('guest');
  const date = screen.getByTestId('date');
  const time = screen.getByTestId('time');

  const submit = async () => await waitFor(() => userEvent.click(submitBtn));

  // Name

  submit()
  setTimeout(expect(name).toHaveFocus, 1000)

  name.value = 'Name';

  // Phone no.
  submit()
  setTimeout(expect(phone).toHaveFocus, 1000)

  phone.value = '1234567890';

  // Guests
  submit()
  setTimeout(expect(guest).toHaveFocus, 1000)

  // Date
  submit()
  setTimeout(expect(date).toHaveFocus, 1000)

  date.value = String(new Date());

  // Time
  submit()
  setTimeout(expect(time).toHaveFocus, 1000)

  time.value = String(new Date().getTime())

  // SUCCESS
})

test('validation', async () => {
  window.alert.mockClear()
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  )

  const fillAllRight = () => {
    name.value = 'Name'
    guest.value = 1;
    date.value = String(new Date())
    time.value = String(new Date())
    phone.value = '1234567890'
  }

  const submitBtn = screen.getByTestId('submit');
  const phone = screen.getByTestId('phone');
  const name = screen.getByTestId('name');
  const guest = screen.getByTestId('guest');
  const date = screen.getByTestId('date');
  const time = screen.getByTestId('time');

  const submit = async () => await waitFor(() => userEvent.click(submitBtn));
 
  // Phone
  fillAllRight()
  phone.value = '12345395';
  submit()
  expect(phone).toHaveFocus()

  // Date
  fillAllRight()
  const backFullDate = new Date(new Date()-86400000);
  date.value = `${backFullDate.getFullYear()}-${(String(backFullDate.getMonth()).length===1?'0':'')+backFullDate.getMonth()}-${(String(backFullDate.getDate()).length===1?'0':'')+backFullDate.getDate()}`
  submit()
  expect(date).toHaveFocus()
})

test('label onclick', async () => {
  render(
    <BrowserRouter>
      <Form />
    </BrowserRouter>
  )

  const labels = screen.getAllByTestId('label');

  labels.forEach(async label => {
    await waitFor(() => userEvent.click(submitBtn));
    expect(label.nextElementSibling).tohaveFocus();
  })
})