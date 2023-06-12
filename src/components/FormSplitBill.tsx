import { ChangeEvent, useState } from 'react';
import Button from '../UI/Button';
import { IFriend } from '../types/IFriend';

interface FormSplitBillProps {
  selectedFriend: IFriend;
}

function FormSplitBill({ selectedFriend }: FormSplitBillProps) {
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

  return (
    <form className="form-split-bill">
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
