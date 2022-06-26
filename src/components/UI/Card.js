import React from "react";
import news from "../../images/newsapp.jpg";
import chat from "../../images/kwiiik.jpg";
import weather from "../../images/weather.jpg";
import sorting from "../../images/sorting.jpg";

export default function Card(props) {
  const myStyle = {
    backgroundColor: props.mode === "Dark" ? "#2A0944" : "#FFF338",
    borderRadius: "10px",
    color: props.mode === "Dark" ? "#fff" : "#000",
  };
  return (
    <div className="container">
      <h1
        className="my-3"
        style={{
          color: props.mode === "Dark" ? "#1F51FF" : "black",
          fontFamily: "'Press Start 2P', cursive",
        }}
      >
        PROJECTS()
      </h1>
      <div className="row gy-5 d-flex justify-content-center">
        <div className="col-md-6 ">
          <div className="p-3" style={myStyle}>
            <h1 className="my-2">Hotnewz</h1>
            <img
              src={news}
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="d-felx my-3">
              <p>
                A daily news app which provides daily headlines and top
                headlines basesd on category of news user chooses and yeah it
                comes with dark mode 😅.I used NewsApi api to fetch the daily
                news data.
              </p>
            </div>
            <div className="d-flex justify-content-between mx-5 my-2">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open("https://github.com/Reeetesh/Hotnews", "_blank")
                }
              >
                code
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open("https://github.com/Reeetesh/Hotnews", "_blank")
                }
              >
                App
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="p-3 " style={myStyle}>
            <h1 className="my-2">Kwiiikchat</h1>
            <img
              src={chat}
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="d-felx my-3">
              <p>
                A chatting webapp made using node js, socket.io api and
                handlebars through which users can make rooms and can chat with
                people in that room currently.
              </p>
            </div>
            <div className="d-flex justify-content-between mx-5 my-2">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open(
                    "https://github.com/Reeetesh/kwiiikchat",
                    "_blank"
                  )
                }
              >
                Code
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open("https://kwiiikchat.herokuapp.com/", "_blank")
                }
              >
                App
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="p-3 " style={myStyle}>
            <h1 className="my-2">Weather App</h1>
            <img
              src={weather}
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="d-felx my-3">
              <p>
                A web application built using NODE JS that takes location as an
                input from the user and displays the
                temperature,precipitation,humidity etc. using weatherstack and
                Mapbox APIs.
              </p>
            </div>
            <div className="d-flex justify-content-between mx-5 my-2">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open(
                    "https://github.com/Reeetesh/weather-website",
                    "_blank"
                  )
                }
              >
                code
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open("https://weather-rian.herokuapp.com/", "_blank")
                }
              >
                App
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="p-3 " style={myStyle}>
            <h1 className="my-2">Sorting Visualiser</h1>
            <img
              src={sorting}
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
            <div className="d-felx my-3">
              <p>
                Web application that displays working of varrious sorting
                Algorithm like Merge Sort,Quick Sort,Bubble Sort,Insertion Sort
                using JAVASCRIPT . User has option to select size of array and
                speed of working of sorting algorithm.
              </p>
            </div>
            <div className="d-flex justify-content-between mx-5 my-2">
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open(
                    "https://github.com/Reeetesh/SortingVisualizer",
                    "_blank"
                  )
                }
              >
                code
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ width: "6rem" }}
                onClick={() =>
                  window.open(
                    "https://reeetesh.github.io/SortingVisualizer/",
                    "_blank"
                  )
                }
              >
                App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
