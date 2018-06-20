export class PastPresentModel {

  constructor(id: number, title: string, text: string, img: string, video?: string, latitude?: string, longitude?: string) {
    this.Id = id;
    this.Title = title;
    this.Img = img;
    this.Text = text;
    this.Video = video;
    this.Latitude = latitude;
    this.Longitude = longitude;
  }

  Id: number;
  Title: string;
  Text: string;
  Img: string;
  Video?: string;
  Latitude: string;
  Longitude: string;
}
