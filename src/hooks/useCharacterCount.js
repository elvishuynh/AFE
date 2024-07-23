import { useState } from 'react';

export default function useCharacterCount(maxLength) {
  const [characterCount, setCharacterCount] = useState(`0/${maxLength}`);

  const handleChange = (e) => {
    const { value } = e.target;
    const length = value.length;
    setCharacterCount(`${length}/${maxLength}`);
  };

  return { characterCount, handleChange };
}