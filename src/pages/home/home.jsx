import React from 'react'

const Home = (props) => {
  const { latest, nowPlaying } = props;
  return (
    <div>
        <button onClick={latest}>Latest films</button>
        <button onClick={nowPlaying}>OPEN INFO</button>
    </div>
  )
}

export default Home