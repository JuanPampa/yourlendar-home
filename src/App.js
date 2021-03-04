import React from 'react';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("http://dashboard.yourlendar.fr/api/users/external").then((res) => {return res.text()}).then((data) => this.setState(JSON.parse(data)));
  }

  render() {
    return (
    <div style={{backgroundColor: "#212121"}} className="flex-block h-screen w-screen">

      <div className="flex justify-center align-center mb-24">

        <div className="flex pt-4">
          <div>
            <img
              className="w-25 h-24 pr-4"
              src='http://dashboard.yourlendar.fr/favicon.png' 
              alt='Yourlendar'>
            </img>
          </div>

        <div>
            <h1 className="text-blue-400 text-5xl pb-2">Yourlendar</h1>
            <a href="http://dashboard.yourlendar.fr"><button className="button button--traditional mb-4">Accéder à l'application</button></a>
          </div>
        </div>
          
      </div>

      <div className='m-auto text-center pt-10 pb-10 bg-gray-700'>
          <img
            alt="yourcenar"
            className="m-auto pb-5"
            src="http://www.lyc-yourcenar-morangis.ac-versailles.fr/wp-content/uploads/sites/110/2017/05/diapo1-1-700x300.jpg">
          </img>
          <h3 className="text-blue-400 text-3xl pb-2">La solution <span className="text-indigo-300 hover:text-yellow-500">"Made In Yourcenar"</span> à la communication entre professeurs et élèves !</h3>
      </div>
    </div>
  );
  }
}