import { useState } from 'react';
import FriendsList from './components/FriendsList';
import { IFriend } from './types/IFriend';
import FormAddFriend from './components/FormAddFriend';
import Button from './UI/Button';
import FormSplitBill from './components/FormSplitBill';

const initialFriends: IFriend[] = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

console.log(initialFriends);

function App() {
  const [friends, setFriends] = useState<IFriend[]>(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
