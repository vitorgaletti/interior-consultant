import { Navbar } from '../Navbar';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <span>This Interior</span>
      <Navbar />
    </header>
  );
}
