export interface PinSVGProps {
  width: string
  height: string
  fill?: string
  opacity?: string
}

const PinSVG = ({ width, height, fill, opacity }: PinSVGProps): React.ReactElement => (
  <svg 
    viewBox="0 0 32 32" 
    xmlns="http://www.w3.org/2000/svg" 
    width={width}
    height={height}
  >
  <g data-name="Layer 22" id="Layer_22">
    <path
      fill={fill}
      opacity={opacity}
      className="cls-1"
      d="M16 28.53a1 1 0 0 1-.71-.29L3.76 16.71a1 1 0 0 1 0-1.42l1.52-1.51a6.06 6.06 0 0 1 6.37-1.43l5.41-5.41-.94-.94a1 1 0 0 1 0-1.41l3.29-3.3a1 1 0 0 1 1.41 0l9.89 9.89a1 1 0 0 1 0 1.41l-3.3 3.29a1 1 0 0 1-1.41 0l-.94-.94-5.41 5.41a6.08 6.08 0 0 1-1.43 6.37l-1.51 1.52a1 1 0 0 1-.71.29ZM5.88 16 16 26.12l.81-.81a4.12 4.12 0 0 0 .77-4.75 1 1 0 0 1 .18-1.15l6.59-6.59a1 1 0 0 1 1.42 0l.94.94 1.88-1.88-8.47-8.47-1.88 1.88.94.94a1 1 0 0 1 0 1.42l-6.59 6.59a1 1 0 0 1-1.15.18 4.12 4.12 0 0 0-4.75.77Z"
    />
    <path
      fill={fill}
      opacity={opacity}
      className="cls-1"
      d="M2 31a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42l8.24-8.23a1 1 0 0 1 1.41 1.41l-8.23 8.24A1 1 0 0 1 2 31ZM25.06 14.53a1 1 0 0 1-.71-.29l-2.47-2.47a1 1 0 1 1 1.42-1.42l2.47 2.47a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z"
    />
  </g>
</svg>
)

export default PinSVG
