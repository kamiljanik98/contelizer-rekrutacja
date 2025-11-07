import { ReactNode } from 'react';
import Sidebar from './components/Sidebar';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-200">
      <Sidebar />
      <main className="w-full flex-1 flex items-start justify-center min-h-screen p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
