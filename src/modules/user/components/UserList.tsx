import { FC, useEffect, useState } from 'react';
import { User } from '../../../types';
import UserListItem from './UserListItem';

type UserListProps = {
  users: User[];
};

const UserList: FC<UserListProps> = ({ users }) => {
  const [localUsers, setLocalUsers] = useState<User[]>(users);

  useEffect(() => {
    setLocalUsers(users);
  }, [users]);

  const handleEdit = (updatedUser: User) => {
    setLocalUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  if (!localUsers.length) {
    return (
      <p className="mt-6 text-gray-500 italic text-sm">
        Brak użytkowników do wyświetlenia.
      </p>
    );
  }

  return (
    <ul className="w-full mt-6 divide-y divide-gray-800 rounded-2xl border border-gray-800 bg-gray-900 shadow-lg overflow-hidden">
      {localUsers.map((user) => (
        <UserListItem key={user.id} user={user} onEdit={handleEdit} />
      ))}
    </ul>
  );
};

export default UserList;
