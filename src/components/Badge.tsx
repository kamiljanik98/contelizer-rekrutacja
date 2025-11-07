import { FC } from 'react';

type BadgeProps = {
  value: string;
  type: 'pink' | 'blue' | 'green' | 'red';
};

const colors = {
  pink: 'bg-pink-600/20 text-pink-400',
  blue: 'bg-blue-600/20 text-blue-400',
  green: 'bg-green-600/20 text-green-400',
  red: 'bg-red-600/20 text-red-400',
};

const Badge: FC<BadgeProps> = ({ value, type }) => (
  <span
    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colors[type]}`}
  >
    {value}
  </span>
);

export default Badge;
