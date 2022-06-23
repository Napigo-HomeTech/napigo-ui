import React from 'react';

const widthClassMap = (width: number | 'auto') => {
  return width === 'auto' ? 'auto' : `${width}px`;
};

const heightClassMap = (height: number | 'auto') => {
  return height === 'auto' ? 'auto' : `${height}px`;
};

const maxHeightClassMap = (maxHeight: undefined | number) => {
  if (maxHeight) {
    return `${maxHeight}px`;
  }
  return '';
};

type PopperCard = {
  open: boolean;
  width?: number | 'auto';
  height?: number | 'auto';
  position?: 'left' | 'right';
  children: React.ReactNode;
  maxHeight?: number;
};

export const PopperCard: React.FC<PopperCard> = props => {
  const {
    open,
    width = 300,
    height = 200,
    position = 'left',
    maxHeight,
    children,
  } = props;

  return (
    <div
      style={{
        width: `${widthClassMap(width)}`,
        height: `${heightClassMap(height)}`,
        maxHeight: `${maxHeightClassMap(maxHeight)}`,
      }}
      className={`absolute flex flex-col ${open ? '' : 'hidden'} 
        bg-base-300
        shadow-2xl
         mt-[5px] 
         ${position}-0
         z-50 rounded
        p-2
        overflow-auto
        `}
    >
      {children}
    </div>
  );
};
