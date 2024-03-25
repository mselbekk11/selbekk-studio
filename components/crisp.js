'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('44609373-8f69-41b0-9445-3b2b2b9c04fc');
  });

  return null;
};

export default CrispChat;
