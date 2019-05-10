import React from 'react'

const HomePage = React.lazy(() => import('./home/home.page'))
const LoginPage = React.lazy(() => import('./login/login.page'))
const PhotosPage = React.lazy(() => import('./photos/photos.page'))
const SpeechPage = React.lazy(() => import('./speech/speech.page'))
const CounterPage = React.lazy(() => import('./counter/counter.page'))
const TicTacToePage = React.lazy(() => import('./tic-tac-toe/tic-tac-toe.page'))

export {
	HomePage,
	LoginPage,
	PhotosPage,
	SpeechPage,
	CounterPage,
	TicTacToePage
}
