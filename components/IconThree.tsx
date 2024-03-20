import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';

const ICON = require('../assets/servers.json');

export default function PlayOnce() {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return (
    <Player
      ref={playerRef}
      icon={ICON}
      size={50}
      onComplete={() => playerRef.current?.playFromBeginning()}
    />
  );
}
