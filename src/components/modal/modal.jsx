import React from 'react';

export default function Modal({ children }) {
  return <dialog open>{children}</dialog>;
}
