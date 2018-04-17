import {TabsHomePageModel} from "./TabsHomePageModel";
import {PastPresentModel} from "./PastPresentModel";

export class TabsContentModel {
  constructor(id: number, title: string, homePage: TabsHomePageModel, presentList: Array<PastPresentModel>, pastList: Array<PastPresentModel>) {
    this.Id = id;
    this.Title = title;
    this.HomePage = homePage;
    this.PresentList = presentList;
    this.PastList = pastList;
  }

  Id: number;
  Title: string;
  HomePage: TabsHomePageModel;
  PresentList: Array<PastPresentModel>;
  PastList: Array<PastPresentModel>;
}
