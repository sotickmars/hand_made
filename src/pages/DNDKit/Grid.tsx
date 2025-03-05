import React, { FC } from 'react';

type GridProps = {
  columns: number;
} & React.PropsWithChildren;

export const Grid: FC<GridProps> = ({ children, columns }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridGap: 10,
        maxWidth: '800px',
      }}
    >
      {children}
    </div>
  );
};
