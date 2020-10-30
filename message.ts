class Message{
    author: number;
    url: number;
    m: string;

    constructor(){

    }
    
    reply(t: string){
        this.m = t;
    }
}