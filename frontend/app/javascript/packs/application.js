/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

//= require action_cable

// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { css } from "emotion/macro"

const defaultTextStyle = {
  fontFamily: "Raleway, Arial, Helvetica, sans-serif",
  fontWeight: 400,
}

const listStyle = {
  listStyle: "none",
}

let csrf_token
let load_completed = false
let counts = { dog: 0, cat: 0 }

const Text = ({ children, style = {} }) => {
  return <span style={{ ...defaultTextStyle, style }}>{children}</span>
}

const Label = ({ children, style = {} }) => {
  return <label style={{ ...defaultTextStyle, style }}>{children}</label>
}

const base_url = "http://vote-rails.local.app.garden"

function makeVoteHandler(animalName) {
  return function () {
    console.log("Vote for ", animalName)
    counts[animalName]++
    renderApp()
    fetch(`${base_url}/vote`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf_token
      },
      body: JSON.stringify({
        animal: animalName,
        //  authenticity_token: csrf_token,
      }),
    })
  }
}

const App = () => (
  <div className="wrap">
    <div className="content">
      <h1>Vote</h1>
      <div className="options-wrap">
        <div className="img-frame" onClick={makeVoteHandler("dog")}>
          <img src="/assets/dog.jpg" />
          <br />
          <span className="count">{load_completed ? counts.dog : "loading..."}</span>
        </div>
        <div className="img-frame" onClick={makeVoteHandler("cat")}>
          <img src="/assets/cat.jpg" />
          <br />
          <span className="count">{load_completed ? counts.cat : "loading..."}</span>
        </div>
      </div>
    </div>
  </div>
)

function renderApp() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  )
}

function poll() {
  fetch(`${base_url}/poll`)
    .then((response) => response.json())
    .then((data) => {
      load_completed = true
      counts.dog = data.dogs
      counts.cat = data.cats
      renderApp()
    })
}

document.addEventListener('DOMContentLoaded', () => {
  csrf_token = document.head.querySelector("[name=csrf-token][content]").content
  console.log("csrf_token", csrf_token)
  renderApp()
})

poll()