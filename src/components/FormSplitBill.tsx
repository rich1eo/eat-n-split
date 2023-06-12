import Button from '../UI/Button';

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label htmlFor="bill">💰 Bill value</label>
      <input type="text" id="bill" />

      <label htmlFor="expense">🙎‍♂️ Your expense</label>
      <input type="text" id="expense" />

      <label htmlFor="expense-friend">👫 X's expense</label>
      <input type="text" id="expense-friend" disabled />

      <label htmlFor="pay">🤑 Who is paying the bill?</label>
      <select id="pay">
        <option value="user">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
