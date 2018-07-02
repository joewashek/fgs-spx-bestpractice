import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';

import Vue from 'vue';
import Home from './components/Home/Home.vue';

import './plugins/vuetify.js';


import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {

  protected onInit(): Promise<void> {
    SPComponentLoader.loadCss('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
    return super.onInit();
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div id="app-${ this.context.instanceId }">
      </div>`;

      let el = new Vue({
        el:`#app-${this.context.instanceId}`,
        render: h => h(Home)
      });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
