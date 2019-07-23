import { Component, OnInit, Optional, Inject } from '@angular/core';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsServiceInjector, AppConsts } from 'src/app/core/services/constants.service';
import { GeneratorFactoryService } from 'src/app/core/services/generator';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsServiceInjector) private constantsService: AppConsts,
    @Optional() @Inject(GeneratorFactoryService) private generatorFactoryService: (number) => string,
  ) { }

  ngOnInit() {
  }

}
