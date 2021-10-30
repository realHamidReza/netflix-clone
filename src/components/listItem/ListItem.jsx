import "./listItem.scss";
import {
    Add,
    PlayArrow,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);

    const thriller =
        "https://hajifirouz3.cdn.asset.aparat.com/aparat-video/f50de41b00c73e1ebb04488400e8e72435483845-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjMyZjVmYTI2OGM2OGE4YTA5NTk3ZThjNTMxZjU0ZGE3IiwiZXhwIjoxNjI2ODE1MzU0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kSETZDjetnMfQQswg7XvR-KwW71xdOnxzl6QEPmGHiM";
    return (
        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 10 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={thriller} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 h 32 mins</span>
                            <span className="limit">+18</span>
                            <span>2020</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Repellat, voluptate dolorum! sit amet
                            consectetur asperiores voluptates.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ListItem;
