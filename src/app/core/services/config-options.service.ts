import { Injectable } from '@angular/core';

interface Settings {
  id?: number,
  login?: string,
  email?: string,
}

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private settings: Settings;
  constructor() { 
    this.settings = {};
  }

  setSettings(s: Settings){
    Object.keys(s)
      .forEach(k => this.setSettings[k] = s[k])
  }

  getSettings(): Settings{
    return this.settings;
  }
}
