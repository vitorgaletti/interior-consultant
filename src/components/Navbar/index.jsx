import styles from './styles.module.scss';

export function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Home</li>
        <li>Collection</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
