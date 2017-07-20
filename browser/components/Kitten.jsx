import React from 'react'

export default (props) => {
  const kittens = props.kittens || []
  return (
    <div>
      <div id='selected-kitten'>
        <h1 id='kitten-spot'>Kitten Spotlight</h1>
        <h3 id='kitten-name'>Name: {props.kitten && props.kitten.name}</h3>
        <div id='kitten-spotlight' className='col-xs-4'>
          <img src={props.kitten && props.kitten.img} />
        </div>
      </div>
      <div id='kitten-list'>
        <h2>Kittens:</h2>
        <ul>
          {kittens.map((kitten, idx) =>
            <li key={idx} onClick={() => props.select(kitten)}><p>{kitten.name}</p></li>
          )}
        </ul>
      </div>
    </div>
  )
}
