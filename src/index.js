// import _ from 'lodash';
// import printMe from './print.js';
import './style.css';

import { cube } from './math.js';

function component() {
  // var element = document.createElement('div');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!!!!!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  // var btn = document.createElement('button');
  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);
  
  return element;
}
  
document.body.appendChild(component());

// if (module.hot) {
//   // 模块热更新
//   module.hot.accept('./print.js', function() {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//   })
// }

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}