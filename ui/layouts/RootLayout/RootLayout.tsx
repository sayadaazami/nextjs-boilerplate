import { APP_LANG, APP_NAME } from '@lib/constants/app';
import '@ui/styles/globals.scss';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

export const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang={APP_LANG}>
      <head>
        <title>{APP_NAME}</title>
      </head>

      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/auth">auth</Link>
            </li>
            <li>
              <Link href="/dashboard">dashboard</Link>
            </li>
          </ul>
        </nav>

        {children}
      </body>
    </html>
  );
};
