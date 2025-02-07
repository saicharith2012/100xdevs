// components - self contained html
export default function PostComponent(props) {
    return (
      <div
        style={{
          border: "1px solid whitesmoke",
          borderRadius: "10px",
          width: "500px",
          padding: "20px 10px",
          backgroundColor: "white",
          color: "black",
          marginBottom: "5px",
        }}
      >
        <div
          className="top-bar"
          style={{
            display: "flex",
            marginBottom: "20px",
            alignItems: "start",
          }}
        >
          <img
            src={props.image}
            style={{ width: "48px", height: "48px", borderRadius: "50px" }}
          />
  
          <div style={{ marginLeft: "15px" }}>
            <b>{props.name}</b>
            {/* conditional rendering */}
            {!props.promoted ? <div>
              <div>{props.followerCount} followers </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>{props.time} ago</div>
                <img src="https://img.icons8.com/material/24/full-stop.png" style={{ height: "4px", width: "4px", marginLeft: "5px" }}></img>
                <img
                  src="https://img.icons8.com/dotty/80/globe-asia.png"
                  style={{ width: "13px", height: "13px", marginLeft: "5px" }}
                ></img>
              </div>
            </div> : <div>Promoted</div>}
  
          </div>
        </div>
        <div className="post-body">{props.description}</div>
      </div>
    );
  }