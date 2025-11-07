import { useState, useCallback, useEffect } from 'react';
import { User } from '../types';

export const useUsersApi = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = String(process.env.REACT_APP_API_URL);
  const API_KEY = String(process.env.REACT_APP_API_KEY);

  const getUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${API_KEY}` },
      });
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('Failed to fetch users:', err);
      setError('Nie udało się pobrać listy użytkowników.');
    } finally {
      setLoading(false);
    }
  }, [API_URL, API_KEY]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, loading, error, refetch: getUsers };
};
