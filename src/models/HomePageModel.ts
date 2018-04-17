import {TabsContentModel} from "./TabsContentModel";

export class HomePageModel {

  constructor(id: number, title: string, text: string, img: string) {
    this.Id = id;
    this.Title = title;
    this.Text = text;
    this.Img = img;
  }

  Id: number;
  Title: string;
  Text: string;
  Img: string;
}
