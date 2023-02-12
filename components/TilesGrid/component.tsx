import { FC } from 'react';
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
          {tile?.svgComponent({ width: "25px", height: "25px", fill: "#1E1E1E"})}
          <h2>{tile.title}</h2>
          <h4>{tile.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default TilesGrid;