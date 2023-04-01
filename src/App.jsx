import { Header } from './components/header'

import styles from './App.module.css'

import './styles.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header 
      nome= 'Ignite feed'
      />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {/* <Post 
            author='Rafael Leivas'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eveniet, velit similique repudiandae magnam magni debitis omnis, sapiente aspernatur ipsum ea consequatur ipsa illum maxime? Eius facilis repudiandae beatae nemo!'
            />

        <Post 
            author='Lipe Souza'
            content='Speak for me my friend'
            /> */}

        </main>
      </div>
    </div>
    )
}

