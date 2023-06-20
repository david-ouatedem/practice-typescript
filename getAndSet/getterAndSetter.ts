class person {
  private _fullname: string
  private _age: number
  private _admin: boolean

  get admin() {
    return this._admin 
  }
  set admin(adminStatus: boolean){
    if(adminStatus === true){
      console.log('he is admin');
    }
    this._admin = adminStatus
  }
}

let Person = new person()
Person.admin = true 