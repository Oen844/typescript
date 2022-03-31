(()=>{

  let myDynamicVar: any;
  myDynamicVar = 'string';
  myDynamicVar = 123;
  myDynamicVar = true;
  myDynamicVar = {name: 'John'};
  myDynamicVar = [1,2,3];
  console.log('myDynamicVar', myDynamicVar);

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toUpperCase();
  console.log('rta', rta);
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed(2);
  console.log('rta2', rta2);
  

})()
