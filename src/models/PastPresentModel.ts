export class PastPresentModel {

  constructor(id: number, img: string, text: string, video: string) {
    this.Id = id;
    this.Img = img;
    this.Text = text;
    this.Video = video;
  }

  Id: number;
  Img: string;
  Text: string;
  Video: string;

}
