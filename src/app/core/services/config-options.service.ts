import { Injectable } from '@angular/core';
import { CoreModule } from "../core.module";

interface Settings {
  id?: number,
  login?: string,
  email?: string,
}

@Injectable({
  providedIn: CoreModule
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
