export class Image {
  url: string;
  height: number;
  width: number;

  constructor(data: any) {
    Object.assign(this, data);
  }
  
}