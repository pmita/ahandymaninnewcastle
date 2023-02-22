import { FC } from 'react';
import { BurgerMenuSVGProps } from '../SVGs/BurgerMenuSVG';
//STYLES
import styles from './styles.module.scss';

export type TilesGridProps = {
  children?: React.ReactNode;
  tiles?: TileProps[];
}

export type TileProps = {
  id: number;
  title?: string;
  description?: string;
  svgIcons?: string;
  svgComponent?: React.FC;
}

const TilesGrid: FC<TilesGridProps> = ({ tiles, children }) => {
  return (
    <div className={styles.tilesGrid}>
      {tiles && tiles.map(tile => (
        <div className={styles.tile} key={tile.id}>
          {tile?.svgComponent({ width: "85px", height: "85px" })}
          <h4 className={styles.title}>{tile.title}</h4>
          <h5 className={styles.description}>{tile.description}</h5>
        </div>
      ))}
    </div>
  );
}

export default TilesGrid;