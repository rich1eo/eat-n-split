import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../UI/Button';
import { IFriend } from '../types/IFriend';

interface FormAddFriendProps {
  onAddFriend(friend: IFriend): void;
}

function FormAddFriend({ onAddFriend }: FormAddFriendProps) {
  const [friendName, setFriendName] = useState<string>('');
  const [friendImg, setFriendImg] = useState<string>('');

  function handleFriendNameChange(event: ChangeEvent<HTMLInputElement>) {
    setFriendName(event.target.value);
  }

  function handleFriendImgChange(event: ChangeEvent<HTMLInputElement>) {
    setFriendImg(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!friendName || !friendImg) return;

    const id = Math.trunc(Math.random() * 1000 + 1);
    const friend: IFriend = {
      id,
      name: friendName,
      image: `${friendImg}?=${id}`,
      balance: 0,
    };

    setFriendName('');
    setFriendImg('');

    onAddFriend(friend);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friend">👫Add friend</label>
      <input
        type="text"
        id="friend"
        value={friendName}
        onChange={handleFriendNameChange}
      />

      <label htmlFor="image">🩻 Image URL</label>
      <input
        type="text"
        id="image"
        value={friendImg}
        onChange={handleFriendImgChange}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
