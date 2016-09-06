var React = require('react');

var WeatherMessage = ({temp, location}) => {
    /*var location = this.props.location;
        var temp = this.props.temp;*/
        //or
    //var {location, temp} = props;
    //or
    //put the variables inside arrow function
    return (
        <div>
            <h3 className="text-center">It' is {temp} in {location}</h3>
        </div>
    );
}

module.exports = WeatherMessage;