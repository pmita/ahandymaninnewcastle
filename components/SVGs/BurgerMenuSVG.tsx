export interface BurgerMenuSVGProps {
    width: string
    height: string
    fill?: string
}

const BurgerMenuSVG = ({ width, height, fill}: BurgerMenuSVGProps): React.ReactElement => (
  <svg
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <path 
      d="M0 0h16v2H0zM0 7h16v2H0zM0 14h16v2H0z" 
      fill={fill}
    />
  </svg>
)

export default BurgerMenuSVG;
