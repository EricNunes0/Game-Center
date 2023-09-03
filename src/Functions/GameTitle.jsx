import style from "styled-components";

const GameTitle = style.h1((props) => ({
    textAlign: "center",
    fontSize: "40px",
    fontFamily: "Poppins",
    fontWeight: "bold",
    color: "#000000",
    transition: "all 0.3s"
}));

export default GameTitle;