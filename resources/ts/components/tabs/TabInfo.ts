import { ReactNode } from 'react';

export interface TabInfo {
  name: string;
  label: string;
  enabled: boolean;
  callback: Function;
  component?: ReactNode;
}