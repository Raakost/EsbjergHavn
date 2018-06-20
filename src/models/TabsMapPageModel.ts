import {PastPresentModel} from "./PastPresentModel";

export class TabsMapPageModel {

  constructor(id: number, map: string, markers: Array<PastPresentModel>) {
    this.Id = id;
    this.Markers = markers;
  }

  Id: number;
  Markers: Array<PastPresentModel>;
}
