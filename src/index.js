import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  var br = document.createElement('br');
  element.appendChild(br);

  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  element.appendChild(btn);
  
  btn.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
    var print = module.default;
    print();
  });

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