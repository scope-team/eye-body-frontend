// get 리퀘스트 타입
export type TGetPhotoReq = {
  first: number; //number사진 응용 프로그램의 역순으로 원하는 사진 수입니다 (즉, 가장 최근에 저장된 사진)
  after: string; //일치하는 커서 page_info { end_cursor } 에 대한 이전 호출에서 반환 getPhotos
  groupTypes: 'Album' | 'All' | 'Event' | 'Faces' | 'Library' | 'PhotoStream' | 'SavedPhotos'; // SavedPhotos가 디폴트, 결과 필터링 할 그룹 유형을 지정함.
  groupName: string; //'최근 사진'또는 사용자 정의 앨범 제목과 같은 그룹 이름에 대한 필터를 지정합니다.
  assetType: 'All' | 'Videos' | 'Photos'; //Photos가 디폴트임
  mimeTypes: Array<string>; //mimetype별로 필터링(예 : image / jpeg).
};

// get 리스폰스 타입
export type TGetPhotoRes = {
  edges: [
    {
      node: TNode;
    },
  ];
  page_info?: TPageInfo;
};

export type TEdge = Array<TInnerEdge>;

export type TInnerEdge = {
  node: TNode;
  createdAt?: string;
};

export type TEdges = Array<TInnerEdges>;

export type TInnerEdges = {
  node: TNode;
};

// get result의 Node 키 타입
export type TNode = {
  type: string;
  group_name: string;
  image: TImage;
  timestamp: number;
  location: any | null;
};
export type TImage = {
  uri: string;
  height: number;
  width: number;
  isStored?: boolean;
  playableDuration: number | null;
  filename: string | null;
  fileSize: number | null;
};

// get result의 page_info 키 타입
export type TPageInfo = {
  has_next_page: boolean;
  start_cursor: string;
  end_cursor: string;
};
