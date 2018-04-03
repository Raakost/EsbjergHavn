export class TabsHomePageModel {

  constructor(id: number, text: string, slideImg1: string, slideImg2: string, longitude: number, latitude: number) {
    this.Id = id;
    this.Text = text;
    this.SlideImg1 = slideImg1;
    this.SlideImg2 = slideImg2;
    this.Longitude = longitude;
    this.Latitude = latitude;
  }

  Id: number;
  Text: string;
  SlideImg1: string;
  SlideImg2: string;
  Longitude: number;
  Latitude: number;

}
