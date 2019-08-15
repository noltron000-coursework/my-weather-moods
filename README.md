# My Weather Moods
This app is a userless weather &amp; mood tracker. You can tap into San Francisco's trending mood as it relates to the weather by checking out our submitted data!

Any user can input as many entries as they wish sans certain HTTPS request attacks.

## 🚧 Construction 🏗
This app is still under construction. If you want to try it out right away, follow these simple steps:
1. download or clone this repository.
1. cd to this app's directory and run `npm start`.
1. go to https://openweathermap.org/api and grab your own secret api key.
1. navigate to [`http://localhost:3000/`](http://localhost:3000/) in your preferred browser.

Functionality wise, this app does a few things. 
- It has a somewhat simple layout. It is built for mobile first.
- It pulls data from the open weather map api and displays it in a react app.
- If you click an emoji, the date and 'mood value' will log to console.

In the future, this app will have more functionality.
- It will post a mood rating paired with a date-time to a server every time an emoji is clicked.
- It will digest the data from the database and show trends, graphs, statistics, or some other graphics.


> Personal Reference: [MERN stack](https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274)
