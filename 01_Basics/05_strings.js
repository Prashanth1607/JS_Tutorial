  const name = "Raju"
  const repoCount = 50

  console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

  const gameName = new String('Prashanth-Uc-com')

  console.log(gameName[0]);
  console.log(gameName.toUpperCase());
  console.log(gameName.charAt('2'));
  console.log(gameName.indexOf('U'));
 
  const newString = gameName.substring(0,4)
  console.log(newString);

  const anotherString = gameName.slice(-10,4)
  console.log(anotherString);

  const newString1 = "  Hitesh  " 
  console.log(newString1.trim());

  const url = "https://ravi.com/ravi%20"
  console.log(url.replace('%20', '_'))

  console.log(url.includes("sundar"))
  
  console.log(gameName.split('-'))