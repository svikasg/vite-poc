import '@fontsource/roboto/400.css';
import {Body} from './Body.jsx';
import {Header} from './Header.jsx';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
        <Header/>
        <Body/>
    </div>
  )
}

export default App
