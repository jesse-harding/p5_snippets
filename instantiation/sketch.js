//p5 instantiation


let globalRedChannel = 255;

let sketch1 = function(p){

    p.setup = function(){
        var cnv = p.createCanvas(100,100);
        cnv.parent('p5wrapper1');
    };

    p.draw = function(){
        p.background(200);
        p.fill(0,0,globalRedChannel);
        p.rect(p.width/2-20, p.height/2-20, 40,40);
    };   
};



let sketch2 = function(p){

    p.setup = function(){
        var cnv = p.createCanvas(100,100);
        cnv.parent('p5wrapper2');
    };

    p.draw = function(){
        p.background(200);
        p.fill(globalRedChannel, 0 , 0);
        p.rect(p.width/2-20, p.height/2-20, 40,40);
    };   
};

new p5(sketch1);
new p5(sketch2);