//var _ = require('lodash');
import _ from 'lodash'; //npm i --save-dev @types/lodash

const data = [
  {
    username : 'nico',
    role: 'admin'
  },
  {
    username : 'v,alentina',
    role: 'seller'
  },
  {
    username : 'zulema',
    role: 'seller'
  },
  {
    username : 'santiago',
    role: 'customer'
  },
];

const rta = _.groupBy(data, (item)=> item.role);

console.log(rta);



