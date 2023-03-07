import { LayoutLoadingProps } from './types';

export const LayoutLoading = ({ title }: LayoutLoadingProps) => {
  return <div>{title || 'loading...'}</div>;
};
