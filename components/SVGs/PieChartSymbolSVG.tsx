import { FC } from 'react';

export interface PieChartSymbolSVGProps {
  width: string;
  height: string;
  fill?: string;
}

const PieChartSymbolSVG: FC<PieChartSymbolSVGProps> = ({ width, height, fill, ...props}) => (
  <svg
    viewBox="0 0 50 50"
    xmlSpace="preserve"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={fill}>
      <path d="M26.5 0c-.168 0-.333.009-.5.013V24h22.944c.034-.496.056-.996.056-1.5C49 10.074 38.927 0 26.5 0z" />
      <path d="M44.944 28H22V4.013c.167-.004.332-.013.5-.013C10.073 4 0 14.074 0 26.5S10.073 49 22.5 49c12.38 0 22.42-8.51 22.496-20.859-.007-.024-.026-.523-.052-.141zM44.996 28.141A.608.608 0 0 0 45 28c0 .047-.003.093-.004.141z" />
    </g>
  </svg>
)

export default PieChartSymbolSVG;
