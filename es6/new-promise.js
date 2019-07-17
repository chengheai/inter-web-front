const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

delay(1000).then(_ => {
  console.log('executed');
});
