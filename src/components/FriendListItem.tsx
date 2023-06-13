import { IFriend } from '../types/IFriend';
import Button from '../UI/Button';

interface FriendListItemProps {
  friend: IFriend;
  selectedFriend: IFriend | null;
  onSelection(friend: IFriend): void;
}

function FriendListItem({
  friend,
  selectedFriend,
  onSelection,
}: FriendListItemProps) {
  const isSelected = selectedFriend?.id === friend.id;

  function handleSelection() {
    onSelection(friend);
  }

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button onClick={handleSelection}>
        {isSelected ? 'Close' : 'Select'}
      </Button>
    </li>
  );
}

export default FriendListItem;
