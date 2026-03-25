import { useRef } from 'react';

let seq = 0;

export function useStableId(prefix: string) {
  const ref = useRef<string>();
  if (!ref.current) {
    seq += 1;
    ref.current = `${prefix}-${seq}`;
  }
  return ref.current;
}
