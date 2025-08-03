import React from 'react';
import '../globals.css'; // Ensure global styles are imported

type Props = {
  children: React.ReactNode;
  fullHeight?: boolean; // Optional prop to control full height
};

export default function CenteredContainer({ children, fullHeight = true }: Props) {
  return (
    <div className={`centerDiv ${fullHeight ? 'full-height' : ''}`}>
      {children}
    </div>
  );
}
