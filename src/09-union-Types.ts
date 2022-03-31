(()=>{

  let userId: string | number;  //union type dos tipos de valores string o number
  userId = 'asasd';
  userId = 123;

  function greeting(myText: string |number){
    if(typeof myText === 'string'){
      console.log('string', myText);
      console.log('string', myText.toUpperCase());

    }else{
      console.log('number', myText);
      console.log(myText.toFixed(1));

    }
  }

  greeting('asdasd');
  greeting(123);


})();
