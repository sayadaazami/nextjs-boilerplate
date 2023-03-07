import { PropsWithChildren } from 'react';

export const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <h1>auth</h1>

      {children}
    </main>
  );
};
