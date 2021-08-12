export type TProps = {
  navigation: any;
};

export type TImages = {
  fileSize: number;
  filename: string;
  height: number;
  playableDuration: any;
  uri: string;
  width: number;
};

export type TPhotos = {
  group_name: string;
  image: TImages;
  location: string | null;
  timestamp: number;
  type: string;
};

export type TSelectedPhotos = {
  filename: string;
  uri: string;
};
