import { Header } from './components/header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './styles.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/rafael-leivas.png',
      name: 'Rafael Leivas',
      role: 'Pika grande'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-17 15:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/igorrosiak.png',
      name: 'Igor Rosiak',
      role: 'Pika media'
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-04-10 15:00:00')
  },
]

export function App() {
  return (
    <div>
      <Header 
      nome= 'Ignite feed'
      />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
            <Post 
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
    )
}

