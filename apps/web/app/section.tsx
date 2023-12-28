'use client';

import { Button } from '@repo/ui';

export default function Section() {
  return (
    <Button
      onClick={() => {
        window.alert('hi');
      }}
    >
      Click Me!
    </Button>
  );
}
