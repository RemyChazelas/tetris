var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{C as s,R as i,q as c,$ as p,a as d}from"./vendor.7b289b39.js";const m=[40,100,300,1200],u={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},x=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),f=()=>{const e=["I","J","L","O","S","T","Z"],t=e[Math.floor(Math.random()*e.length)];return u[t]},g=(e,t,{x:r,y:o})=>{for(let a=0;a<e.tetromino.length;a+=1)for(let l=0;l<e.tetromino[a].length;l+=1)if(!(0===e.tetromino[a][l]||t[a+e.pos.y+o]&&t[a+e.pos.y+o][l+e.pos.x+r]&&"clear"===t[a+e.pos.y+o][l+e.pos.x+r][1]))return!0;return!1};const y=()=>{const[e,s]=i.useState({}),c=i.useCallback((()=>s({pos:{x:4,y:0},tetromino:f().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:i,collided:c})=>{s((s=>{return p=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))l.call(t,r)&&n(e,r,t[r]);return e})({},s),d={pos:{x:s.pos.x+=e,y:s.pos.y+=i},collided:c},t(p,r(d));var p,d}))},resetPlayer:c,playerRotate:t=>{const r=JSON.parse(JSON.stringify(e));var o;r.tetromino=(o=r.tetromino).map(((e,t)=>o.map((e=>e[t])))).map((e=>e.reverse()));const a=r.pos.x;let l=1;for(;g(r,t,{x:0,y:0});)if(r.pos.x+=l,l=-(l+(l>0?1:-1)),l>r.tetromino[0].length)return void(r.pos.x=a);s(r)}}},b=(e,t)=>{var r,o;const[a,l]=i.useState(x()),[n,s]=i.useState(0);return i.useEffect((()=>{if(!e.pos)return;s(0);const r=r=>{const o=r.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((t,r)=>{t.forEach(((t,a)=>{0!==t&&(o[r+e.pos.y][a+e.pos.x]=[t,""+(e.collided?"merged":"clear")])}))})),e.collided?(t(),(e=>e.reduce(((t,r)=>-1===r.findIndex((e=>0===e[0]))?(s((e=>e+1)),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(r),t)),[]))(o)):o};l((e=>r(e)))}),[e.collided,null==(r=e.pos)?void 0:r.x,null==(o=e.pos)?void 0:o.y,e.tetromino]),{stage:a,setStage:l,rowsCleared:n}},h=c.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`;var v=i.memo((({type:e})=>i.createElement(h,{type:e,color:u[e].color})));const w=c.div`
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #8398f1;
  background: rgba(34, 34, 34, 0.2);
  @media(max-width: 500px) {
    grid-template-columns: repeat(${12}, 20px);
    grid-template-rows: repeat(${20}, 20px);
  }
`,E=({stage:e})=>i.createElement(w,null,e.map((e=>e.map(((e,t)=>i.createElement(v,{key:t,type:e[0]})))))),S=c.div`
  box-sizing: border-box;
  display: flex;
  align-items: space-between;
  margin: 20px 0 20px 0;
  padding: 20px;
  border: 2px solid #8398f1;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${e=>e.gameOver?"red":"#999"};
  background: #2b30993a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;

  @media(max-width: 350px) {
    width: 105px;
  font-size: 0.7rem;

  }
`,O=({gameOver:e,text:t})=>i.createElement(S,{gameOver:e},t),$=c.button`
  box-sizing: border-box;
  margin: 20px 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: solid 2px #01f1b1d0;
  color: white;
  background: #2b30993a;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  @media(max-width: 500px) {
  width: 120px;
  font-size: 0.9rem;    
  }
  @media(max-width: 350px) {
    width: 105px;
  font-size: 0.7rem;
  }
  
`,k=({callback:e})=>i.createElement($,{onClick:e},"Start Game"),I=c.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`,j=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;
  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
  @media(max-width: 500px) {
    .display {
      justify-content: space-around;
    }
  }
  @media(max-width: 350px) {
    .display {
      justify-content: center;
    }
  }
`,P=()=>{const[e,t]=i.useState(null),[r,o]=i.useState(!0),a=i.useRef(null),{player:l,updatePlayerPos:n,resetPlayer:c,playerRotate:p}=y(),{stage:d,setStage:u,rowsCleared:f}=b(l,c),{score:h,setScore:v,rows:w,setRows:S,level:$,setLevel:P}=(e=>{const[t,r]=i.useState(0),[o,a]=i.useState(0),[l,n]=i.useState(1);return i.useEffect((()=>{e>0&&(r((t=>t+m[e-1]*l)),a((t=>t+e)))}),[e]),{score:t,setScore:r,rows:o,setRows:a,level:l,setLevel:n}})(f),L=e=>{g(l,d,{x:e,y:0})||n({x:e,y:0,collided:!1})};return function(e,t){const r=s.exports.useRef(null);s.exports.useEffect((()=>{r.current=e}),[e]),s.exports.useEffect((()=>{if(null!==t){const e=setInterval((function(){r.current&&r.current()}),t);return()=>{clearInterval(e)}}}),[t])}((()=>{w>10*$&&(P((e=>e+1)),t(1e3/$+200)),g(l,d,{x:0,y:1})?(l.pos.y<1&&(console.log("Game over!"),o(!0),t(null)),n({x:0,y:0,collided:!0})):n({x:0,y:1,collided:!1})}),e),i.createElement(I,{role:"button",tabIndex:0,onKeyDown:({keyCode:e,repeat:o})=>{if(!r)if(37===e)L(-1);else if(39===e)L(1);else if(40===e){if(o)return;t(30)}else 38===e&&p(d)},onKeyUp:({keyCode:e})=>{r||40===e&&t(1e3/$+200)},ref:a},i.createElement(j,null,i.createElement("div",{className:"display"},r?i.createElement(i.Fragment,null,i.createElement(O,{gameOver:r,text:"Game Over!"}),i.createElement(k,{callback:()=>{a.current&&a.current.focus(),u(x()),t(1e3),c(),v(0),P(1),S(0),o(!1)}})):i.createElement(i.Fragment,null,i.createElement(O,{text:`Score: ${h}`}),i.createElement(O,{text:`Lignes: ${w}`}),i.createElement(O,{text:`Level: ${$}`}))),i.createElement(E,{stage:d})))};const L=p`
  body {
    margin: 0;
    padding: 0;
    background: url(${"/assets/bg.28cd06fa.jpg"}) #000;
    background-size: cover;
    background-position: center;
  }
`;d.render(i.createElement(i.Fragment,null,i.createElement(L,null),i.createElement(P,null)),document.getElementById("root"));
