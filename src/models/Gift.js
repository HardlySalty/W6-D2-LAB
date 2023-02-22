

export class Gift{
  constructor(data){
    this.id = data.id || null
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened || false
  }
}
