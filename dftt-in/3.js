var x = 3;
var module = {
    x:6,
    getX: function(){
        setTimeout(function(){
            console.log(this.x);
        })
    }
};
var receiveX = module.getX;
receiveX();
var GetX = receiveX.bind(module)
GetX()