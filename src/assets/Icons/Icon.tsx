interface IIconType {
  color: string;
  size?: number;
}

const Plus = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
    >
      <path
        fill="#ffffff"
        width={size}
        height={size}
        id="plus"
        d="M27,14v4a1,1,0,0,1-1,1H19v7a1,1,0,0,1-1,1H14a1,1,0,0,1-1-1V19H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h7V6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v7h7A1,1,0,0,1,27,14Z"
      />
    </svg>
  );
};
const Search = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        id="search"
        d="M27.207,24.37866,20.6106,17.78235a9.03069,9.03069,0,1,0-2.82825,2.82825L24.37878,27.207a1,1,0,0,0,1.41425,0l1.414-1.41418A1,1,0,0,0,27.207,24.37866ZM13,19a6,6,0,1,1,6-6A6.00657,6.00657,0,0,1,13,19Z"
      />
    </svg>
  );
};
const Notification = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
    >
      <path
        fill={color}
        id="bell"
        d="M26,22.07037V23a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1v-.92963a2.00005,2.00005,0,0,1,.89062-1.66412l.32819-.21881A3.99993,3.99993,0,0,0,9,16.85925V13a7.00018,7.00018,0,0,1,5-6.70636V5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6.31073a7.31386,7.31386,0,0,1,5,6.98273v3.56579a3.99993,3.99993,0,0,0,1.78119,3.32819l.32819.21881A2.00005,2.00005,0,0,1,26,22.07037ZM14,27a2,2,0,0,0,4,0V26H14Z"
      />
    </svg>
  );
};
const List = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      <path
        fill={color}
        id="thumbnails-list"
        d="M11,14v4a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V14a1,1,0,0,1,1-1h4A1,1,0,0,1,11,14Zm-1,7H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V22A1,1,0,0,0,10,21ZM10,5H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5Zm17,6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V12A1,1,0,0,0,27,11Zm0-6H14a1,1,0,0,0-1,1V7a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V6A1,1,0,0,0,27,5Zm0,18H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V24A1,1,0,0,0,27,23Zm0-6H14a1,1,0,0,0-1,1v1a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V18A1,1,0,0,0,27,17Z"
      />
    </svg>
  );
};
const Hearth = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
      height={size}
      width={size}
    >
      <path
        fill={color}
        id="heart"
        d="M27.78131,11.92578c0,4.82666-6.13562,8.68128-11.0376,14.0686a.99978.99978,0,0,1-1.48742,0c-4.902-5.38732-11.03748-9.24194-11.03748-14.0686,0-5.52954,7.53626-9.48682,11.57507-3.82544a.25855.25855,0,0,0,.42029.00562C20.47992,2.43628,27.78131,6.39453,27.78131,11.92578Z"
      />
    </svg>
  );
};
const Bookmark = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      <path
        fill={color}
        id="bookmark"
        d="M25,6V26.58582a1,1,0,0,1-1.70709.70715L16.5,20.5,9.70709,27.293A1,1,0,0,1,8,26.58582V6a2.00006,2.00006,0,0,1,2-2H23A2.00006,2.00006,0,0,1,25,6Z"
      />
    </svg>
  );
};
const Star = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
      width={size}
      height={size}
    >
      <path
        fill={color}
        id="star"
        d="M27.34766,14.17944l-6.39209,4.64307,2.43744,7.506a.65414.65414,0,0,1-.62238.85632.643.643,0,0,1-.38086-.12744l-6.38568-4.6383-6.38574,4.6383a.643.643,0,0,1-.38086.12744.65419.65419,0,0,1-.62238-.85632l2.43744-7.506L4.66046,14.17944A.65194.65194,0,0,1,5.04358,13h7.89978L15.384,5.48438a.652.652,0,0,1,1.24018,0L19.06476,13h7.89978A.652.652,0,0,1,27.34766,14.17944Z"
      />
    </svg>
  );
};
const Play = ({ color, size }: IIconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="glyphicons-basic"
      viewBox="0 0 32 32"
      height={size}
      width={size}
    >
      <path
        fill={color}
        id="play"
        d="M24.8175,16.86432,9.503,25.77667A1,1,0,0,1,8,24.91235V7.08765a1,1,0,0,1,1.503-.86432L24.8175,15.13568A1.00006,1.00006,0,0,1,24.8175,16.86432Z"
      />
    </svg>
  );
};

export { Plus, Notification, Search, List, Hearth, Bookmark, Star, Play };
