import React from 'react';

function App() {

  const COLOR_PRIMARY = "#111D4A";
  const COLOR_SECONDARY = "#4B8F8C";
  const COLOR_TEXT= "#F0F4EF";

  return (
      <body className="h-screen">
        <div style={{height:'50vh', background:COLOR_PRIMARY, position:'relative'}}>
            <div style={{bottom: -8, left:10, color:COLOR_TEXT, zIndex:1, position:'absolute'}} className="font-extralight text-left">
              <div className="text-6xl">
                  Dylan Herina
              </div>
            </div>
          </div>
          <div style={{height:'50vh', background:COLOR_SECONDARY}}>
              <div className="text-2xl font-extralight" style={{color:COLOR_PRIMARY, paddingLeft:'106px'}}>
                <div>dpherina@gmail.com</div>
                <a href={'https://www.linkedin.com/in/dylanherina/'}>linkedin</a>
                <br/>
                <a href={'https://github.com/dpherina'}>github</a>
              </div>
          </div>
      </body>
    
  );
}
export default App;