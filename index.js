class arrayOfNumber{
  constructor(){
      this.newNumb=[...arguments]
      let a = this.newNumb
      let x = []
      for (var i=0, len=a.length; i<len; i++){
        if ( typeof a[i] === 'number'){
          x.push(a[i])
        }
      }
      this.newNumb= x
    }
  push(){
     return this.newNumb
  }
}

let a = new arrayOfNumber("asa",8,5,58,65,354,"dss","as")

console.log(a.push())