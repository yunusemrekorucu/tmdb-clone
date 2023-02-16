interface IIconType {
  color?: string;
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

export { Plus, Notification, Search };
