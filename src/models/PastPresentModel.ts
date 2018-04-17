export class PastPresentModel {

  constructor(id: number, title: string, text: string, img: string, video?: string) {
    this.Id = id;
    this.Title = title;
    this.Img = img;
    this.Text = text;
    this.Video = video;
  }

  Id: number;
  Title: string;
  Text: string;
  Img: string;
  Video?: string;

}
