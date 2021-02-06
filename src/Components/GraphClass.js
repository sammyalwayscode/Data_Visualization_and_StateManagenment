import React, { useRef, useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { select, line, curveCardinal } from 'd3'
import { Button } from 'antd'

function GraphClass() {
  const svgRef = useRef()
  console.log(svgRef)

  const [data, setData] = useState([60, 25, 73, 44, 80, 62, 83, 22, 76, 12, 37, 10, 99])

  useEffect(() => {
    const svg = select(svgRef.current)
    // console.log(svg)
    // const x = svg.selectAll("circle").data(data)
    // console.log(x)
    // x.join(
    //   (enter) => enter.append("circle"),
    //   (update) => update.attr("class", "updated"),
    //   (exit) => exit.remove(),
    // )
    //   .attr("r", (value) => value)
    //   .attr("cx", (value) => value)
    //   .attr("cy", (value) => value)
    //   .attr("stroke", "black")
    //   .attr("fill", "none")

    const newLine = line()
      .x((value, index) => index * 20)
      .y((value) => 150 - value)
      .curve(curveCardinal)

    svg.selectAll("path").data([data]).join("path").attr("d", value => newLine(value)).attr("stroke", "red").attr("fill", "none")
  })
  return (
    <center>
      <div>
        <h1>Data Visualization</h1>
        <br />
        <br />
        <br />
        <svg ref={svgRef} style={{ backgroundColor: "lightgray" }}>
          {/* <line x1="20" y1="75" x2="200" y2="75" stroke="darkcyan" />
          <rect height="100" width="200" x="20" y="30" fill="none" stroke="red" />
          <path d="MO, 100 60, 75 150, 45 90, 150" stroke="blue" fill="none" /> */}
        </svg>
        <br />
        <br />
        <br />
        <Button onClick={() => {
          setData(data.map((value) => value * 2))
        }}>Change</Button>
        <Button onClick={() => {
          setData(data.map((value) => value / 2))
        }}>Change Back</Button>
        <Button onClick={() => {
          setData(data.filter((value) => value < 60))
        }}>Filter</Button>
      </div>
    </center>
  )
}

export default GraphClass
