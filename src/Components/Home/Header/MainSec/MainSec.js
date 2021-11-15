import React from 'react';
import './MainSec.css'

const MainSec = () => {

  // function searchLocation(e) {
  //     e.preventDefault();
  //     setKeyword(e.target.value);
  //   }

  return (
    <div className="container headMain">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-4 mr-5 p-4">
          <h1><strong className="text-danger"> WatchDog <br /> <span className="text-warning">SmartWatches</span> </strong></h1>
          <p> <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptatum ullam velit eligendi facilis.</small> </p>
          <button className="btn text-light w-50 btnHire">Check Pricing</button>
        </div>
        <div className="col-md-6 offset-md-1 p-3 headMainImg">
          <img className="w-100 img-fluid" src='https://www.apple.com/newsroom/images/product/watch/lifestyle/Apple_announces-watch-se_09152020_big.jpg.large_2x.jpg' alt="" />
        </div>
      </div>
    </div>
  );
};

export default MainSec;