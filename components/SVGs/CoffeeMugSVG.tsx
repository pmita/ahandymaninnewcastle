export interface CoffeeMugSVGProps {
  width: string
  height: string
  fill?: string
  opacity?: string
}

const CoffeeMugSVG = ({ width, height, fill, opacity }: CoffeeMugSVGProps): React.ReactElement => (
  <svg
  xmlSpace="preserve"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  height={height}
  width={width}
>
  <path fill={fill} opacity={opacity} d="M35 48H11a1 1 0 0 1-.998-.938l-2-32A1.001 1.001 0 0 1 9 14h28a1 1 0 0 1 .998 1.062l-2 32A1 1 0 0 1 35 48zm-23.061-2H34.06l1.875-30H10.064l1.875 30z" />
  <path fill={fill} opacity={opacity} d="M39 16H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h32a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM8 14h30V8H8v6z" />
  <path fill={fill} opacity={opacity} d="M37.02 8H9a1 1 0 0 1-.949-1.316l2-6A1 1 0 0 1 11 0h24a1 1 0 0 1 .949.684l1.94 5.821A1 1 0 0 1 37.02 8zM10.387 6h25.226L34.28 2H11.721l-1.334 4zM36.5 24h-27a1 1 0 1 1 0-2h27a1 1 0 1 1 0 2zM10.25 34h25.5v2h-25.5zM26 30h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2z" />
</svg>
)

export default CoffeeMugSVG
