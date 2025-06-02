import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Page, Browser, APIRequestContext } from "@playwright/test";

export interface CustomWorldData {
  page?: Page;
  browser?: Browser;
  apiContext?: APIRequestContext;
  [key: string]: any; // for dynamic values like recordId, testData etc.
}

export class CustomWorld extends World implements CustomWorldData {
  page?: Page;
  browser?: Browser;
  apiContext?: APIRequestContext;
  [key: string]: any;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
