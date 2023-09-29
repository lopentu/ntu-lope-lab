import React from "react";

const News = (props) => {
  return (
    <div
      class="col"
      style={{
        margin: "0",
        padding: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        class="card news-card"
        style={{ width: "100%", marginBottom: "10px" }}
      >
        <div
          class="card-header"
          style={{
            backgroundColor: "rgb(24,90,219,0.4)",
            height: "35px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {props.date}
        </div>
        <div class="card-body" style={{ height: "22vh", overflow: "auto" }}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.time}
            {/* <br></br> */}
            {props.content}

            <br></br>
            <a href={props.link}>{props.linkName}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
