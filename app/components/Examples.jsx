var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are some few location examples to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Onitsha, Nigeria'>Onitsha, Nigeria</Link>
                </li>
                <li>
                    <Link to='/?location=Mora, Sweden'>Mora, Sweden</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples;