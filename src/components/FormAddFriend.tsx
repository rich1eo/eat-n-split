import Button from '../UI/Button';

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend">👫Add friend</label>
      <input type="text" id="friend" />

      <label htmlFor="image">🩻 Image URL</label>
      <input type="text" id="image" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
