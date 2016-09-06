var React = require('react');

var About = (props) => {
    return (

        <div>
        <h1 className="text-center">About</h1>
            <p>
                This is a simple yet robust weather application(SPA) built on React. 
                All you need to use it is enter a city name. 
                I hope you have fun with it
            </p>
            <p>
                Some of the tools I used are as follows:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to weather 
                    data by city name.
                </li>
            </ul>
        </div>
    )
};

module.exports = About;