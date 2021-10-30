import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

const List = () => {
    const [slideNum, setSlideNum] = useState(0);
    const listRef = useRef();

    const handleClick = (dir) => {
        // let distance = listRef.current.getBoundingClientRect().x - 50;
        if (dir === "left" && slideNum > 0) {
            listRef.current.style.transform = `translateX(${
                -230 * slideNum + 230
            }px)`;
            setSlideNum(slideNum - 1);
        }
        if (dir === "right" && slideNum < 5) {
            listRef.current.style.transform = `translateX(${
                -230 * slideNum - 230
            }px)`;
            setSlideNum(slideNum + 1);
        }
    };

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <ArrowBackIos
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                />
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                    <ListItem index={10} />
                </div>
                <ArrowForwardIos
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
};

export default List;
