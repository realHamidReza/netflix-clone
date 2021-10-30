import { ArrowBack } from "@material-ui/icons";
import "./watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBack />
                Home
            </div>
            <video
                className="video"
                autoPlay
                progress
                controls
                src="https://hajifirouz3.cdn.asset.aparat.com/aparat-video/f50de41b00c73e1ebb04488400e8e72435483845-480p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjMyZjVmYTI2OGM2OGE4YTA5NTk3ZThjNTMxZjU0ZGE3IiwiZXhwIjoxNjI2ODE1MzU0LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.kSETZDjetnMfQQswg7XvR-KwW71xdOnxzl6QEPmGHiM"
            ></video>
        </div>
    );
};

export default Watch;
