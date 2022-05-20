import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

import styles from './styles/styles.module.scss';
function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
