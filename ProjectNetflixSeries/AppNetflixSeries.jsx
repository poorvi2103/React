import React from 'react';                //to use JSX(html jesa dikhne vala part)
import Card from './Cardnetflix.jsx';
import SData from './SDatanetflix';


/*ReactDOM.render(
<>
<h1>List of Top 5 Netflix  series in 2020</h1>
<Card 
  imgsrc={SData[0].imgsrc}
  title={SData[0].title}
  sname={SData[0].sname}
  link={SData[0].link}
/>
<Card
 imgsrc={SData[1].imgsrc}
 title={SData[1].title}
 sname={SData[1].sname}
 link={SData[1].link}
 />
 <Card
 imgsrc={SData[2].imgsrc}
 title={SData[2].title}
 sname={SData[2].sname}
 link={SData[2].link}
 />
</>,document.getElementById("netflixProject")
);*/

/*or(using map method)
function ncard(val)
{
  return(
    <Card
    key={val.id}   //each  child in a list should have unique "key"prop....refer vdeo or notes 25
    imgsrc={val.imgsrc}
    title={val.title}
    sname={val.sname}
    link={val.link}/>

  );
}
ReactDOM.render(
  <>
  <h1>List of Top 5 Netflix  series in 2020</h1>
  {SData.map(ncard)}
  </>,
  document.getElementById("netflixProject")
);*/

const App = () =>  (
//or(using map method and fat arrow function)
    <>
    <h1>List of Top 5 Netflix  series in 2020</h1>
    {SData.map((val)=>
    {
      return(
        <Card
        key={val.id}   //each child in a list should have unique "key" prop....refer vdeo or notes 25
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}/>
    
      );//end of return
    }  //end of inner function
    )  //end of argument of map method
    }                                         
    </>
);
export default App;
