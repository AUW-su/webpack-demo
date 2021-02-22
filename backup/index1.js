// 动态导入--import方式

function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
  
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
        return element;
  
    }).catch(error => {
      console.log('An error occurred while loading the component');
      console.log(error);
    });
  }
    
  getComponent().then(component => {
    console.log('111')
    console.log(component)
    document.body.appendChild(component);
  })