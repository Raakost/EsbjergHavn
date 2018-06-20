export class TabsHomePageModel {

  constructor(id: number, text: string, beforeImg: string, nowImg: string, longitude: string, latitude: string) {
    this.Id = id;
    this.Text = text;
    this.BeforeImg = beforeImg;
    this.NowImg = nowImg;
    this.Longitude = longitude;
    this.Latitude = latitude;
  }

  Id: number;
  Text: string;
  BeforeImg: string;
  NowImg: string;
  Latitude: string;
  Longitude: string;


}
