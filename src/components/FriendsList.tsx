import { IFriend } from '../types/IFriend';
import FriendListItem from './FriendListItem';

interface FriendListProps {
  friends: IFriend[];
  selectedFriend: IFriend | null;
  onSelection(friend: IFriend): void;
}

function FriendsList({
  friends,
  selectedFriend,
  onSelection,
}: FriendListProps) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

export default FriendsList;
