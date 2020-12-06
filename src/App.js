import React from 'react';

function App() {

  const COLOR_PRIMARY = "#111D4A";
  const COLOR_SECONDARY = "#4B8F8C";
  const COLOR_TEXT= "#F0F4EF";

  return (
      <body className="h-screen">
        <div style={{height:'50vh', background:COLOR_PRIMARY}} className="relative">
            <div style={{bottom: -9, left:22, color:COLOR_TEXT, zIndex:1}} className="font-extralight text-right absolute flex">
              <div className="text-7xl">
                  Dylan Herina
              </div>
              <div className="text-3xl" style={{paddingTop:'34px', marginLeft:'16px'}}>dpherina@gmail.com</div>
            </div>
          </div>
          <div className="relative" style={{height:'50vh', background:COLOR_SECONDARY}}>
              <div className="text-2xl pl-1 absolute font-extralight" style={{top: 0, left:402, color:COLOR_PRIMARY}}>
                
                <a href={'https://www.linkedin.com/in/dylanherina/'}>linkedin</a>
                <br/>
                <a href={'https://github.com/dpherina'}>github</a>
              </div>
          </div>
      </body>
    
  );
}
export default App;