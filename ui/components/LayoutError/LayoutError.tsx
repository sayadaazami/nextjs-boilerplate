import { LayoutErrorProps } from './types';

export const LayoutError = ({ error, reset }: LayoutErrorProps) => {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <b>{error.message}</b>
      <button onClick={() => reset()}>Try again</button>
      <pre>{error.stack}</pre>
    </div>
  );
};
