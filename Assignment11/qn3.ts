class baseObject{

    constructor(public width: number =0,public lenght:number =0){};
}

class rectangle extends baseObject{
    static width:number;
    static lenght:number;

    constructor(width:number,lenght:number){
        super(width,lenght);
    };

    calcSize():number{
        return this.width * this.lenght;
    };
}

console.log(new rectangle(5,2).calcSize());