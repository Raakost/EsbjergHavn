import {TabsHomePageModel} from "./TabsHomePageModel";
import {PastPresentModel} from "./PastPresentModel";

export class TabsContentModel {
  constructor(id: number, homePage: TabsHomePageModel, presentList: Array<PastPresentModel>, pastList: Array<PastPresentModel>) {
    this.Id = id;
    this.HomePage = homePage;
    this.PresentList = presentList;
    this.PastList = pastList;
  }

  Id: number;
  HomePage: TabsHomePageModel;
  PresentList: Array<PastPresentModel>;
  PastList: Array<PastPresentModel>;

}
