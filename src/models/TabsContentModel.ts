import {TabsHomePageModel} from "./TabsHomePageModel";
import {PastPresentModel} from "./PastPresentModel";
import {TabsMapPageModel} from "./TabsMapPageModel";

export class TabsContentModel {
  constructor(id: number,
              title: string,
              homePage: TabsHomePageModel,
              presentList: Array<PastPresentModel>,
              pastList: Array<PastPresentModel>,
              map: TabsMapPageModel) {
    this.Id = id;
    this.Title = title;
    this.HomePage = homePage;
    this.PresentList = presentList;
    this.PastList = pastList;
    this.Map = map;
  }

  Id: number;
  Title: string;
  HomePage: TabsHomePageModel;
  PresentList: Array<PastPresentModel>;
  PastList: Array<PastPresentModel>;
  Map: TabsMapPageModel;
}
