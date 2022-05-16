import React, { ReactNode, PropsWithChildren } from 'react';

interface ShowProps {
  when: boolean;
  fallback: ReactNode;
}

export const Show = ({
  when,
  fallback,
  children
}: PropsWithChildren<ShowProps>) => (when ? <>{children}</> : <>{fallback}</>);
