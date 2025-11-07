import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const links = [
    { to: '/', label: 'File Processor' },
    { to: '/pesel-validator', label: 'PESEL Validaton' },
    { to: '/users', label: 'Users' },
  ];

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-6">
      <h2 className="text-xl font-semibold mb-6">Panel</h2>
      <nav className="flex flex-col gap-3">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }: { isActive: boolean }) =>
              `block px-3 py-2 rounded-lg font-semibold text-md transition ${
                isActive
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
