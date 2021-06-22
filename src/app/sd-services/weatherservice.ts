/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class weatherservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_weatherservice

  async getWeather(cityName = '', ...others) {
    try {
      var bh = {
        input: {
          cityName: cityName,
        },
        local: {
          currentWeather: undefined,
          ssdWeatherApiUrl: '',
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.CityNameNullCheck(bh);
      //appendnew_next_getWeather
      return (
        // formatting output variables
        {
          input: {},
          local: {
            currentWeather: bh.local.currentWeather,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5VRAsa2t9s2euX2o');
    }
  }

  //appendnew_flow_weatherservice_start

  async CityNameNullCheck(bh) {
    try {
      if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KxteGTC9h7CtJujs(bh);
      } else if (
        this.sdService.operators['null'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KxteGTC9h7CtJujs(bh);
      } else if (
        this.sdService.operators['empty'](
          bh.input.cityName,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KxteGTC9h7CtJujs(bh);
      } else if (
        this.sdService.operators['istype'](
          bh.input.cityName,
          'string',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_n3Kvm5QQu6SaBSlP(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gBr2mscslH2LtFye');
    }
  }

  async sd_KxteGTC9h7CtJujs(bh) {
    try {
      this.matSnackBar.open('Invalid city name', 'okay', {
        duration: 2000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_sd_KxteGTC9h7CtJujs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KxteGTC9h7CtJujs');
    }
  }

  async sd_n3Kvm5QQu6SaBSlP(bh) {
    try {
      bh.local.ssdWeatherApiUrl = `${bh.system.environment.properties.ssdURL}weather`;

      bh.local.qparams = {
        cityName: bh.input.cityName,
      };
      bh = await this.sd_cOVdJ1ZxLE9kgZXc(bh);
      this.sd_BR8h0Erd3gsKr5JZ(bh);
      //appendnew_next_sd_n3Kvm5QQu6SaBSlP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_n3Kvm5QQu6SaBSlP');
    }
  }

  async sd_cOVdJ1ZxLE9kgZXc(bh) {
    try {
      let requestOptions = {
        url: bh.local.ssdWeatherApiUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: bh.local.qparams,
        body: undefined,
      };
      bh.local.currentWeather = await this.sdService.nHttpRequest(
        requestOptions
      );
      //appendnew_next_sd_cOVdJ1ZxLE9kgZXc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cOVdJ1ZxLE9kgZXc');
    }
  }

  async sd_BR8h0Erd3gsKr5JZ(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.ssdWeatherApiUrl);
      //appendnew_next_sd_BR8h0Erd3gsKr5JZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BR8h0Erd3gsKr5JZ');
    }
  }

  async sd_Ud7C1DBjrNCZ8KZh(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.errors);
      //appendnew_next_sd_Ud7C1DBjrNCZ8KZh
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ud7C1DBjrNCZ8KZh');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_gUlsMNWaGGNriysf(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async sd_gUlsMNWaGGNriysf(bh) {
    const catchConnectedNodes = ['sd_Ud7C1DBjrNCZ8KZh'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    this.sd_Ud7C1DBjrNCZ8KZh(bh);
    //appendnew_next_sd_gUlsMNWaGGNriysf
    return true;
  }
  //appendnew_flow_weatherservice_Catch
}
