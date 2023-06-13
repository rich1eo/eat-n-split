import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../UI/Button';
import { IFriend } from '../types/IFriend';

interface FormSplitBillProps {
  selectedFriend: IFriend;
  onSplitBill(value: number): void;
}

function FormSplitBill({ selectedFriend, onSplitBill }: FormSplitBillProps) {
  const [bill, setBill] = useState<number | string>('');
  const [userExpense, setUserExpense] = useState<number | string>('');
  const [whoIsPaying, setWhoIsPaying] = useState<string>('user');
  const friendExpense: number | string =
    typeof bill === 'number'
      ? typeof userExpense === 'number'
        ? bill - userExpense
        : bill - 0
      : '';

  function handleBillChange(event: ChangeEvent<HTMLInputElement>) {
    setBill(+event.target.value);
  }

  function handleExpenseChange(event: ChangeEvent<HTMLInputElement>) {
    setUserExpense(
      +event.target.value > +bill ? userExpense : +event.target.value
    );
  }

  function handlePayChange(event: ChangeEvent<HTMLSelectElement>) {
    setWhoIsPaying(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      typeof bill !== 'number' ||
      typeof userExpense !== 'number' ||
      typeof friendExpense !== 'number'
    ) {
      return;
    } else {
      onSplitBill(whoIsPaying === 'user' ? friendExpense : -userExpense);
    }
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" value={bill} onChange={handleBillChange} />

      <label htmlFor="expense">🙎‍♂️ Your expense</label>
      <input
        type="text"
        id="expense"
        value={userExpense}
        onChange={handleExpenseChange}
      />

      <label htmlFor="expense-friend">👫 {selectedFriend.name}'s expense</label>
      <input type="text" id="expense-friend" disabled value={friendExpense} />

      <label htmlFor="pay">🤑 Who is paying the bill?</label>
      <select id="pay" value={whoIsPaying} onChange={handlePayChange}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
