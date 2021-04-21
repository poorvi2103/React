
                                                    //challenge 3 video 17
function greet()                             
{
  const text1="Hello Sir,";
let text2;
const greetingStyle={};
const time=new Date().getHours();
if(time>=0&&time<12)
{
  text2="Good Morning";
  greetingStyle.color="green";
}
else if(time>=12&&time<18)
{
  text2="Good Afternoon";
  greetingStyle.color="orange";
}
else{
  text2="Good Night";
  greetingStyle.color="black";
}
return(
  <h3><span style={{color:"Blue",fontStyle:"italic"}}>{text1}</span> <span style={greetingStyle}>{text2}</span></h3>
);
}
export default greet;