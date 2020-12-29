# Rocketevents
Demo: https://ticketswappie.netlify.app/

## Overview

>TicketSwappie is a full stack web application that allows individuals to create events and sell tickets. 

>The backend repo can be found [here](https://github.com/luisanegri/ticketswappie-server)

>You can login with:\
email: test@test.com | password: 123


This project is part of my personal portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!
Email: <luisaanegri@gmail.com>
LinkedIn: https://www.linkedin.com/in/luisanegri/

## Features

* User Authentication
* User Authorisation: user is only able to create events and sell tickets if logged in.
* Create a new event and include information such as: Event name, description, price, location, image and date.
* View the list of events
* View detailed information - including list of tickets being sold - of each event
* Sell ticket of a specific event and include information such as: Event name, ticket price, and image.
* View a list of tickets being sold for a specific event.
* View information about a specific ticket being sold, check the seller's name and make comments.

## TODO

* Message success/error on post request (post new ticket to sell, post new event)

## Technologies Used

* [Superagent](https://visionmedia.github.io/superagent/)
* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Redux](https://redux.js.org/)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)
* [Bcrypt](https://www.npmjs.com/package/bcrypt)
* [Json Web token](https://www.npmjs.com/package/jsonwebtoken)
* [Heroku Postgresql](https://elements.heroku.com/addons/heroku-postgresql)


## Install

1. Clone repository

        git clone [repository url]
        
2. Install dependencies

        npm install
        
3. Start app - frontend and backend

        npm run start 
        nodemon index.js
        
## Deployment

* Backend - Heroku
* Frontend - Netlify
