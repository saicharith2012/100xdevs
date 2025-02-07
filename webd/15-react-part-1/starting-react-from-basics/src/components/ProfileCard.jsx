export default function ProfileCardComponent() {
    return (
        <div
            style={{
                width: "200px",
                backgroundColor: "white",
                border: "1px solid whitesmoke",
                borderRadius: "10px",
                overflow: "hidden",
                margin: "10px",
            }}
        >
            <img
                id="cover-image"
                src="https://mculocationscout.com/wp-content/uploads/2021/04/avengers3_067c-titan.jpg?w=840"
                style={{
                    height: "60px",
                    width: "100%",
                    objectFit: "cover",
                }}
            ></img>

            <div
                style={{
                    padding: "0px 10px 10px 10px ",
                }}
            >
                <div className="profile-section">
                    <a
                        href=""
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                height: "50px",
                            }}
                        >
                            <img
                                id="profile-image"
                                src="https://pbs.twimg.com/profile_images/1165467823625293824/PtVBbwHn_400x400.jpg"
                                style={{
                                    width: "72px",
                                    height: "72px",
                                    borderRadius: "50px",
                                    border: "2px solid white",
                                    position: "absolute",
                                    top: "-60%",
                                    left: "30%",
                                    marginBottom: "10px",
                                }}
                            ></img>
                        </div>
                        <div id="name">Thanos Verma</div>
                    </a>
                    <div id="description">The Mad Titan</div>
                </div>

                <div className="analytics-section">
                    <a href="">
                        <div>Profile Viewers</div>
                        <div>15,342</div>
                    </a>
                    <a href="">View all analytics</a>
                </div>

                <a className="promotion-section" href="">
                    <div>Strengthen your profile with an AI writing assistant</div>

                    <div>
                        <img></img>
                        <span>Reactivate Premimum: 50% Off</span>
                    </div>
                </a>

                <a>
                    <img></img>
                    <span>Saved items</span>
                </a>
            </div>
        </div>
    );
}