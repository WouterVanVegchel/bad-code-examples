class Bot {
    msg: Message;
    idB: number;
    urlC: number;
    idA: number;
    urlB: number;
    idC: number;
    idD: number;
    urlA: number;
    idE: number;
    urlD: number;
    urlE: number;

  
    constructor(msg: Message, urlA, urlB, urlC, idA, idD, idB, idC, idE, urlD) {
        this.msg = msg; // set the message
        this.idB = idB;
        this.idA = idA;
        this.idC = idC; this.idD = idD; this.idE = idE;
        this.urlA = urlA; this.urlB = urlB; this.urlC = urlC;
        this.urlD = urlD;
    }
  
    setResponse(){
        if(this.urlA === 0 && this.idA === 0){
            if(this.msg.author === this.idB || this.msg.author === this.idC || this.msg.author === this.idD || this.msg.author === this.idE){
                this.msg.reply(':x: **You already typed `!c`, now type `!p` to save that conversation somewhere.**')
                return;
            }
            this.urlA = this.msg.url
            this.idA = this.msg.author
          }
          else if(this.urlB === 0 && this.idB === 0){
            if(this.msg.author === this.idA || this.msg.author === this.idC || this.msg.author === this.idD || this.msg.author === this.idE){
                this.msg.reply(':x: **You already typed `!c`, now type `!p` to save that conversation somewhere.**')
            return
            }
            this.urlB = this.msg.url
            this.idB = this.msg.author
          }
          else if(this.urlC === 0 && this.idC === 0){
            if(this.msg.author === this.idB || this.msg.author === this.idA || this.msg.author === this.idD || this.msg.author === this.idE){
                this.msg.reply(':x: **You already typed `!c`, now type `!p` to save that conversation somewhere.**')
            return
            }
            this.urlC = this.msg.url
            this.idC = this.msg.author
          }
          else if(this.urlD === 0 && this.idD === 0){
            if(this.msg.author === this.idB || this.msg.author === this.idC || this.msg.author === this.idA || this.msg.author === this.idE){
                this.msg.reply(':x: **You already typed `!c`, now type `!p` to save that conversation somewhere.**')
            return
            }
            this.urlC = this.msg.url
            this.idC = this.msg.author
          }
          else if(this.urlE === 0 && this.idE === 0){
            if(this.msg.author === this.idB || this.msg.author === this.idC || this.msg.author === this.idD || this.msg.author === this.idA){
                this.msg.reply(':x: **You already typed `!c`, now type `!p` to save that conversation somewhere.**')
            return
            }
        }
    }
}