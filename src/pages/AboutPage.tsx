import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница событий</h1>
      <p>
        Лучшее приложение
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Обратно к списку событий
      </button>
    </>
  )
}
