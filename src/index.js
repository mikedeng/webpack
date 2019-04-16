const button = document.createElement('button');
button.innerText = 'click me';
button.onclick = () => {
  System.import('./image_viewer.js').then(module => {
    // console.log(module);
    module.default();
  });
};

document.body.appendChild(button);
