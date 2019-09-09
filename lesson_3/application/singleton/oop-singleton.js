class Single {
    constructor( name ){
        if( Single.instance === null){
            this.name = name;
            this.data = [];
            Single.instance = this;
        }
        return Single.instance;
    }

    addToData(){
        this.data.push(1);
    }
}

Single.instance = null;

export default Single;