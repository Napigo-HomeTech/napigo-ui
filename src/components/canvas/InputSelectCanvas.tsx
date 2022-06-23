import React, { ReactNode } from 'react';

type InputSelectCanvasProps = {
  children: ReactNode;
};
export const InputSelectCanvas: React.FC<InputSelectCanvasProps> = ({
  children,
}) => {
  return <div className="flex flex-col p-2 w-[400px]">{children}</div>;
};
