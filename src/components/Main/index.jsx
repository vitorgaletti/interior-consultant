import styles from './styles.module.scss';

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>Modern interior</h1>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <button>
          Read more
          <span className="material-icons">arrow_right_alt</span>
        </button>
      </div>

      <img src="/public/img/photo1.png" alt="Modern interior" />
      <div className={styles.profile}>
        <div className={styles.header}>
          <img src="/public/img/photo2.png" alt="Profile" />
          <div className={styles.name}>
            <p>Aliza Webber</p>
            <span>Interior designer</span>
          </div>
        </div>
        <footer className={styles.footer}>
          Designed in 2020 by Aliza Webber
        </footer>
      </div>
    </main>
  );
}
