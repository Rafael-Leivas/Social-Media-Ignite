import { Header } from './components/header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './styles.css'

export function App() {
  return (
    <div>
      <Header 
      nome= 'Ignite feed'
      />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
            author='Rafael Leivas'
            content='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint eveniet, velit similique repudiandae magnam magni debitis omnis, sapiente aspernatur ipsum ea consequatur ipsa illum maxime? Eius facilis repudiandae beatae nemo!'
            />

        </main>
      </div>
    </div>
    )
}

