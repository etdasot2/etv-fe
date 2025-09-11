// data/videoData.ts

export interface Video {
    id: string;
    url: string;
    caption: string;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
  }
  
  // Function to generate random videos
  export const generateRandomVideos = (count: number): Video[] => {
    return Array.from({ length: count }, (_, i) => ({
      id: `video-${i + 6}`,
      url: `https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4`,
      caption: `Random video #${i + 6}`,
      likes: Math.floor(Math.random() * 10000),
      comments: Math.floor(Math.random() * 1000),
      shares: Math.floor(Math.random() * 500),
      isLiked: false,
    }));
  };
  
  // Initial video data
  export const initialVideos: Video[] = [
    {
      id: '1',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      caption: 'Amazing video #1',
      likes: 1200,
      comments: 85,
      shares: 32,
      isLiked: false,
    },
    {
      id: '2',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      caption: 'Check this out! #2',
      likes: 3400,
      comments: 120,
      shares: 56,
      isLiked: false,
    },
    {
      id: '3',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      caption: 'Awesome content #3',
      likes: 5600,
      comments: 230,
      shares: 78,
      isLiked: false,
    },
    {
      id: '4',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      caption: 'Epic adventure #4',
      likes: 7800,
      comments: 340,
      shares: 98,
      isLiked: false,
    },
    {
      id: '5',
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      caption: 'You wont believe this! #5',
      likes: 9900,
      comments: 450,
      shares: 120,
      isLiked: false,
    },
  ];
  