import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";




const dots = [
  {x: 2, y: 2, stroke: 'a'},
  {x: 3, y: 3, stroke: 'a'},
  {x: 4, y: 4, stroke: 'a'},
  {x: 5, y: 5, stroke: 'a'},
  {x: 6, y: 6, stroke: 'a'},
  {x: 7, y: 7, stroke: 'b'},
  {x: 8, y: 8, stroke: 'b'},
  {x: 9, y: 9, stroke: 'b'},
  {x: 2, y: 8, stroke: 'b'},
  {x: 3, y: 7, stroke: 'b'},
  {x: 4, y: 6, stroke: 'b'},
  {x: 5, y: 5, stroke: 'b'},
  {x: 6, y: 4, stroke: 'b'},
  {x: 7, y: 3, stroke: 'c'},
  {x: 8, y: 2, stroke: 'c'},
  {x: 1, y: 9, stroke: 'c'},
  {x: 9, y: 8, stroke: 'c'},
  {x: 8, y: 7, stroke: 'c'},
  {x: 7, y: 3, stroke: 'c'},
  {x: 6, y: 2, stroke: 'c'},
  {x: 5, y: 1, stroke: 'c'},
];



const div = document.querySelector("#myplot");

const plot = Plot.plot({
  width: div.clientWidth,
  height: div.clientHeight,
  marks: [
    Plot.dot(dots, {
      x: "x",
      y: "y",
      r: 6,
      stroke: "stroke"
    })
  ]
});

div.append(plot);
