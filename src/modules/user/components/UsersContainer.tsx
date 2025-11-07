import InputText from '../../../components/InputText';
import { useUsersApi } from '../../../hooks/useUsersApi';
import { useUserSearch } from '../../../hooks/useUserSearch';
import UserList from './UserList';
import { Search } from 'lucide-react';

export default function UsersContainer() {
  const { users, loading, error } = useUsersApi();
  const { query, setQuery, filteredUsers } = useUserSearch(users);

  if (loading) return <p>Wczytywanie użytkowników...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="w-full max-w-3xl">
      <div className="flex justify-between items-center mt-6 mb-4">
        <h2 className="font-semibold text-2xl">Użytkownicy</h2>
        <InputText
          placeholder="Szukaj użytkownika..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="max-w-[40%]"
          aria-label="Szukaj użytkownika"
        />
      </div>

      {filteredUsers.length > 0 ? (
        <UserList users={filteredUsers} />
      ) : (
        <p className="text-gray-400 italic">
          {query
            ? 'Nie znaleziono użytkowników.'
            : 'Brak użytkowników w bazie.'}
        </p>
      )}
    </div>
  );
}
