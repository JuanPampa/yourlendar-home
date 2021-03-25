import React from 'react';
import yourlendarLogo from "./assets/favicon.png";
import yourcenarImage from "./assets/yourcenar.jpg";
export default class App extends React.Component {

  redirect() {
    window.location.href = "http://dashboard.yourlendar.fr"
  };

  render() {
    return (
    <div style={{backgroundColor: "#212121"}} className="flex-block h-screen w-screen">

      <div className="flex justify-center align-center mb-24">

        <div className="flex pt-4">
          <div>
            <img
              className="w-25 h-24 pr-4"
              src={yourlendarLogo}
              alt='Yourlendar'>
            </img>
          </div>

        <div>
            <h1 className="text-blue-400 text-5xl pb-2">Yourlendar</h1>
            <button onClick={this.redirect} className="button button--traditional mb-4">Accéder à l'application</button>
          </div>
        </div>
          
      </div>

      <div className='m-auto text-center pt-10 pb-5 bg-gray-700'>
          <img
            alt="yourcenar"
            className="m-auto pb-5"
            src={yourcenarImage}>
          </img>
          <h3 className="text-blue-400 text-3xl pb-2">La solution <span className="text-indigo-300 hover:text-yellow-500">"Made In Yourcenar"</span> à la communication entre professeurs et élèves !</h3>
      </div>
    </div>
  );
  }
}