# Rocketevents
Demo: https://ticketswappie.netlify.app/

## Overview

>TicketSwappie is a full stack app that allows individuals to create events and sell tickets. The backend repo can be found [here](https://github.com/luisanegri/ticketswappie-server)

## Features

* User Authentication
* User Authorisation
* Create a new event
* View events list
* View information - including list of tickets being sold - of each event
* Sell ticket of an event
* Post comments on the ticket details page
* Check the risk of buying a ticket from a specific user

## TODO

* Conditional Login/Logout buttons on navigation
* Loading message when fetching events
* Back links
* CSS: landing page white space, responsiveness  
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
