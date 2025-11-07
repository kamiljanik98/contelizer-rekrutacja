import { useState, useMemo, useEffect } from 'react';
import { User } from '../types';

export function useUserSearch(users: User[], delay = 300) {
  const [query, setQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const handler = setTimeout(() => {
      const lower = query.toLowerCase();
      setFilteredUsers(
        users.filter((u) => u.name.toLowerCase().includes(lower))
      );
    }, delay);

    return () => clearTimeout(handler);
  }, [query, users, delay]);

  return { query, setQuery, filteredUsers };
}
