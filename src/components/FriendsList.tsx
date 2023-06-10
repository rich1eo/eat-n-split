import { IFriend } from '../types/IFriend';
import FriendListItem from './FriendListItem';

interface FriendListProps {
  friends: IFriend[];
}

function FriendsList({ friends }: FriendListProps) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

export default FriendsList;
