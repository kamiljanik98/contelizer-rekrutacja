import { FC, useState } from 'react';
import { User } from '../../../types';
import Button from '../../../components/Button';
import InputText from '../../../components/InputText';
import InputSelect from '../../../components/InputSelect';

type Props = {
  user: User;
  onSave: (user: User) => void;
  onCancel: () => void;
};

const UserEditForm: FC<Props> = ({ user, onSave, onCancel }) => {
  const [form, setForm] = useState<User>(user);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-gray-200">
      <InputText
        label="Imię"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Imię"
      />

      <InputSelect
        label="Płeć"
        name="gender"
        value={form.gender}
        onChange={handleChange}
        options={[
          { label: 'Mężczyzna', value: 'male' },
          { label: 'Kobieta', value: 'female' },
        ]}
      />

      <InputSelect
        label="Status"
        name="status"
        value={form.status}
        onChange={handleChange}
        options={[
          { label: 'Aktywny', value: 'active' },
          { label: 'Nieaktywny', value: 'inactive' },
        ]}
      />

      <div className="flex gap-2 mt-3">
        <Button
          type="submit"
          className="bg-gray-900 border-1 rounded-lg text-xs px-3.5 py-2 hover:bg-green-600"
        >
          Zapisz
        </Button>
        <Button
          onClick={onCancel}
          className="bg-transparent text-xs rounded-lg px-4 py-2 hover:bg-red-600"
        >
          Anuluj
        </Button>
      </div>
    </form>
  );
};

export default UserEditForm;
