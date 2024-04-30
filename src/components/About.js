import React from "react";

function About() {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">About TextUtils</h2>
              <p className="card-text">
                TextUtils is a simple utility app for manipulating and analyzing
                text. It provides various tools to help users work with text
                efficiently.
              </p>
              <p>
                <strong>With TextUtils, you can:</strong>
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  Count the number of characters, words, and sentences in a text
                </li>
                <li className="list-group-item">
                  Convert text to uppercase or lowercase
                </li>
                <li className="list-group-item">
                  Remove extra spaces from text
                </li>
                <li className="list-group-item">Copy The Text</li>
                <li className="list-group-item">Preview The Text</li>
              </ul>
              <p className="mt-3">
                TextUtils is built using React and Bootstrap, making it
                responsive and easy to use on both desktop and mobile devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
