const getRandomGreen = (colors: string[]) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomRotation = (degValue?: number) => {
  const deg = Math.floor(Math.random() * 90) - (degValue ?? 45);
  return `${deg}deg`;
};

export const generateRandomLeaves = (
  count: number,
  colors: string[],
  time?: number,
  deg?: number
) => {
  const minLeft = 10;
  const maxLeft = 90;

  return Array.from({ length: count }).map((_, i) => ({
    key: i,
    left: `${Math.floor(Math.random() * (maxLeft - minLeft) + minLeft)}%`,
    delay: `${Math.random() * (time ?? 2)}s`,
    duration: `${2 + Math.random() * (time ?? 2)}s`,
    color: getRandomGreen(colors),
    rotate: getRandomRotation(deg),
  }));
};
