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
          {tile?.svgComponent({ width: "100px", height: "100px"})}
          <h2 className={styles.title}>{tile.title}</h2>
          <h4 className={styles.description}>{tile.description}</h4>
        </div>
      ))}
    </div>
  );
}

export default TilesGrid;