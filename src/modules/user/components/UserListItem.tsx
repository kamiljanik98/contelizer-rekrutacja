import { FC, useState } from 'react';
import { User } from '../../../types';
import Badge from '../../../components/Badge';
import UserEditForm from './UserEditForm';
import Button from '../../../components/Button';
import { Settings } from 'lucide-react';

type Props = {
  user: User;
  onEdit: (updatedUser: User) => void;
};

const UserListItem: FC<Props> = ({ user, onEdit }) => {
  const [editing, setEditing] = useState(false);

  const handleSave = (updatedUser: User) => {
    onEdit(updatedUser);
    setEditing(false);
  };

  if (editing) {
    return (
      <li className="px-6 py-4 bg-gray-800 border-b border-gray-700">
        <UserEditForm
          user={user}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
        />
      </li>
    );
  }

  return (
    <li className="flex items-center justify-between px-6 py-3 text-gray-300 hover:bg-gray-800 transition-colors">
      <span className="font-medium text-gray-100">{user.name}</span>
      <div className="flex  items-center gap-4 text-sm text-gray-400">
        <div className="flex gap-8 min-w-[148px]">
          <Badge
            value={user.gender}
            type={user.gender === 'female' ? 'pink' : 'blue'}
          />
          <Badge
            value={user.status}
            type={user.status === 'active' ? 'green' : 'red'}
          />
        </div>
        <Button onClick={() => setEditing(true)} className="bg-transparent">
          <Settings size={18} />
        </Button>
      </div>
    </li>
  );
};

export default UserListItem;
