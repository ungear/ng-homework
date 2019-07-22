export class LocalStorageService {
  constructor() { }

  setItem(name: string, data: any){
    let dataToSet = typeof data === typeof {}
      ? JSON.stringify(data)
      : data;
    localStorage.setItem(name, dataToSet)
  }

  getItem(name: string){
    return localStorage.getItem(name)
  }

  removeItem(name: string){
    localStorage.removeItem(name)
  }
}
