import { FC } from 'react';

export interface CrownSymbolSVGProps {
  width: string;
  height: string;
  fill?: string;
}

const CrownSymbolSVG: FC<CrownSymbolSVGProps> = ({ width, height, fill, ...props }) => (
  <svg
    height={height}
    width={width}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="m2.5 6.091 4.72 4.72L12 6.031l4.781 4.78L21.5 6.092v8.877a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V6.091Zm17 4.818v4.06a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-4.061l2.72 2.72L12 8.848l4.781 4.78 2.719-2.72Z"
      fill={fill}
      fillRule="evenodd"
    />
  </svg>
)

export default CrownSymbolSVG;
