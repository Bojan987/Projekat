import React, { useEffect } from "react";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { getScores, postScores } from "../services";
import { topResults } from "../utilities";
import { SingleField } from "./SingleField";

import background from "../images/morph.jpg";
import Container from "react-bootstrap/esm/Container";
import { Navigation } from "../components/Navigation";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const Table = ({ nrows, ncols, chanceJuggOnStart }) => {
  const createTable = () => {
    let board = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceJuggOnStart);
      }
      board.push(row);
    }

    return board;
  };
  const [initTable, setInitTable] = useState(createTable());
  const [hasWon, setHasWon] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState({ juggHuntScore: 0, username: "" });
  const [int, setInt] = useState();

  useEffect(() => {
    setInt(
      setInterval(() => {
        // console.log(time)
        setTime((time) => {
          return time + 1;
        });
        console.log("izvrsilo se ");
      }, 1000)
    );

    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    if (hasWon) {
      setScore((prev) => {
        return {
          ...prev,
          juggHuntScore: time,
          username: JSON.parse(localStorage.getItem("LoggedUser")).username,
        };
      });
      clearInterval(int);
    }
  }, [hasWon]);

  useEffect(() => {
    if (score.juggHuntScore !== 0) postScores(score);
  }, [score]);

  const toggleJuggKill = (coord) => {
    let board = [...initTable];
    // console.log(board)
    let splitted = coord.split("-");
    let [x, y] = splitted.map((item) => parseInt(item));

    function toggleJugg(x, y) {
      // console.log(y, x);
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }
    toggleJugg(y, x); //Flip initial
    toggleJugg(y, x - 1); //flip left
    toggleJugg(y, x + 1); //flip right
    toggleJugg(y - 1, x); //flip below
    toggleJugg(y + 1, x); //flip above
    let isWin = board.every((row) => row.every((cell) => !cell));
    //   setInit({hasWon:hasWon,board:board})
    setHasWon(isWin);
    setInitTable(board);
  };

  const makeTable = () => {
    let tblBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <SingleField
            key={coord}
            isDead={initTable[y][x]}
            toggleJuggKill={() => toggleJuggKill(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className="Table">
        <tbody>{tblBoard}</tbody>
      </table>
    );
  };

  return (
    <div>
      <Navigation
        loggedPlayer={JSON.parse(localStorage.getItem("LoggedUser"))}
      />
      <Container
        fluid
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop:'15px'
        }}
      >
        {hasWon ? (
          <Container className="d-flex justify-content-center win-section">
          
            
              <span className="winner neon-blue">YOU</span>
              <span className="winner neon-blue">WIN!</span>
              
          </Container>
        ) : (
          <Container  className="juggernaut-section">
            <Row >
              <Col className="Board-title " lg={10}>
                <div className="neon-orange">Hunt the Juggernaut</div>
                <div className="neon-blue">{time}</div>
              </Col>
            </Row>
            <Row className='tableRow  d-flex '>
            <Col lg={5}  >
                <div className = 'jugg-description align-self-center'>

                </div>
                </Col>
              <Col lg={5}>
                {makeTable()}
              </Col>
              
            </Row>
          </Container>
        )}
      </Container>
    </div>
  );
};
