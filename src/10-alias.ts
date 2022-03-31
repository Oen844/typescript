(() => {
  type UserID = string | number | boolean;
  let userId: UserID;  //union type dos tipos de valores string o number




  type Sizes ='S' | 'M' | 'L' | 'XL' | 'XXL' ;
  let shirttSize: Sizes ;
  shirttSize = 'M';
  shirttSize = 'L';
  shirttSize = 'XL';
  shirttSize = 'XXL';

  function greeting(userId: UserID, sizes : Sizes) {
    if(typeof userId=== 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(111, 'L');


})();
