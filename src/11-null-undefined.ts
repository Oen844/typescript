(()=>{
    // let myNumber: number;
    // let myString: string;

    let myNull:null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null;

    myNumber = 12;

    let myString: string | undefined = undefined;
    myString = 'asdasd';

    function hi(name: string | undefined){
      let hello = 'Hello ';
      if(name){
        hello+= name;
      }else{
        hello+= 'nobody';
      }
      console.log(hello);
    };

    function hi2(name: string | undefined){
      let hello = 'Hello ';
     hello+= name ? name.toLowerCase() : 'nobody';
      console.log(hello);
    };

    hi('John');
    hi(myNull);

    hi2('John');
    hi2(myNull);

})();
