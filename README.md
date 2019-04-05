<p align="center">
  <a href="https://rubyonrails.org/" style="margin-right: 1.5em;">
    <img alt="ruby on rails" src="https://rubyonrails.org/images/rails-logo.svg" width="100" />
  </a>
  <a href="https://www.docker.com/" style="margin-right: 1.5em;">
    <img alt="docker" src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" width="100" />
  </a>
  <a href="https://kubernetes.io/">
    <img alt="npm" src="https://i.pinimg.com/originals/d3/97/8a/d3978a3830404998788e8c83dfa6f476.png" width="100" />
  </a>
</p>


# Voting example project with Ruby on Rails and Kubernetes

This is a minimal Ruby on Rails project consisting of a single containerized Rails service and a Postgres database (a separate service), [written to accompany this blog post on Medium](https://medium.com/p/8c6a866ebe18/edit).

## Setup

If you haven't installed Garden already, [please follow these instructions](https://docs.garden.io/basics/installation).

## Usage

To spin everything up, run `garden dev --hot=frontend` inside the project directory (i.e. anywhere inside this repo).

[For more context and details, check out our blog post on Medium](https://medium.com/p/8c6a866ebe18/edit).
