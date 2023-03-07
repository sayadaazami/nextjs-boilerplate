import { PropsWithChildren } from 'react';

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <h1>dashboard</h1>
      {children}
    </main>
  );
};
