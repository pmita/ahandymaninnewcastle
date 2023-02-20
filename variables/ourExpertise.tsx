//COMPONENTS
import CrownSymbolSVG from "../components/SVGs/CrownSymbolSVG";
import PoundSymbolSVG from "../components/SVGs/PoundSymbolSVG";
import PieChartSymbolSVG from "../components/SVGs/PieChartSymbolSVG";
//TYPES
import { BurgerMenuSVGProps } from "../components/SVGs/BurgerMenuSVG";

export type ourExpertiseType = {
  id: number;
  title: string;
  description: string;
  svgComponent?: (props: BurgerMenuSVGProps) => React.ReactElement;
}

export const ourExpertise: ourExpertiseType[] = [
  {
    id: 1,
    title: 'Luxury Results',
    description: "We work around your schedule and deadlines; Let us know about key date and we will take it from there, and if anything changes we are only a phone call away.",
    svgComponent: props => {
      return (
        <CrownSymbolSVG 
          width={props.width}
          height={props.height}
          fill={props.fill}
        />);
    },
  },
  {
    id: 2,
    title: 'Affordable Price',
    description: "We do things like we want things to be done in our own homes and we do everything in our power to meet our customer expectations.",
    svgComponent: (props) => {
      return (
        <PoundSymbolSVG 
          width={props.width}
          height={props.height}
          fill={props.fill}
        />);
    },
  },
  {
    id: 3,
    title: 'Smooth Workflow',
    description: "We handle everything, beginning to end. If you encounter any setbacks we are here to talk about and get over them, together.",
    svgComponent: (props) => {
      return (
        <PieChartSymbolSVG
          width={props.width}
          height={props.height}
          fill={props.fill}
        />);
    },
  }
];