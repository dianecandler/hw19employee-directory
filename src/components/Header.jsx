import React from 'react'

export default function Header() {
    return (
        <div style={{textAlign: 'center', padding: '30px', backgroundColor: '#d2d2d2'}}>
            <h1>
            <a
          className="App-link"
          href="https://github.com/dianecandler/hw19employee-directory"
          target="_blank"
          rel="noopener noreferrer"
        >Employee Directory
        </a>
        </h1>
            <p>This is a Test Driven Development application using Circle CI, Code Climate, and hosting on Heroku.</p>
        </div>
    )
}
