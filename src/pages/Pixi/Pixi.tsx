import React, { useMemo } from 'react';
import * as S from './styled';
import { BlurFilter, TextStyle } from 'pixi.js';
import { Stage, Container, useApp, useTick, AnimatedSprite } from '@pixi/react';

const [width, height] = [500, 500];
const spritesheet = '../../img/knight/knight_1_sprite.json';

const JetFighter = () => {
  const [frames, setFrames] = React.useState(spritesheet);
  const [rot, setRot] = React.useState(0);
  const app = useApp();

  useTick((delta) => setRot((r) => r + 0.01 * delta));

  //   load

  //   if (frames.length === 0) {
  //     return null;
  //   }
  return (
    <Container rotation={rot} x={width / 2} y={height / 2}>
      <AnimatedSprite
        animationSpeed={0.5}
        isPlaying={true}
        textures={frames}
        anchor={0.5}
      />
    </Container>
  );
};

export const Pixi: React.FC = () => {
  return (
    <S.PixiWrapper>
      <Stage width={width} height={height} options={{ autoDensity: true }}>
        <JetFighter />
      </Stage>
    </S.PixiWrapper>
  );
};
