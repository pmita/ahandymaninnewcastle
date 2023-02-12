import { FC } from 'react';

export interface PieChartSymbolSVGProps {
  width: string;
  height: string;
  fill?: string;
}

const PieChartSymbolSVG: FC<PieChartSymbolSVGProps> = ({ width, height, fill, ...props}) => (
  <svg 
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    <g data-name={1}>
      <path 
        fill={fill}
        d="M230 455.73A176 176 0 0 1 54.13 279.86C54.14 182.89 133 104 230 104a15 15 0 0 1 15 15v145.86h145.87a15 15 0 0 1 15 15c0 96.97-78.87 175.87-175.87 175.87Zm-15-321c-73.41 7.53-130.86 69.73-130.87 145.1A146 146 0 0 0 230 425.73c75.37 0 137.57-57.45 145.1-130.87H230a15 15 0 0 1-15-15Z" 
      />
      <path 
        fill={fill}
        d="M441.13 248.63h-164.9a15 15 0 0 1-15-15V68.73a15 15 0 0 1 15-15c99.2 0 179.9 80.71 179.9 179.9a15 15 0 0 1-15 15Zm-149.9-30h134.16A150.16 150.16 0 0 0 291.23 84.48Z" 
      />
    </g>
  </svg>
)

export default PieChartSymbolSVG;
