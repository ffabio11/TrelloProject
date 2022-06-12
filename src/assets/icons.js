const SIZE = "20";
const HEARTSIZE = "16";
export const CommentsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-message-circle-2"
      width={SIZE}
      height={SIZE}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <desc>
        Download more icon variants from
        https://tabler-icons.io/i/message-circle-2
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
    </svg>
  );
};

export const LikesIcon = ({ isLiked }) => {
  console.log(isLiked);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={HEARTSIZE}
      height={HEARTSIZE}
      viewBox="0 0 24 24"
      fill={isLiked && "red"}
    >
      <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </svg>
  );
};

export const FilesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-paperclip"
      width={SIZE}
      height={SIZE}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <desc>
        Download more icon variants from https://tabler-icons.io/i/paperclip
      </desc>
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"></path>
    </svg>
  );
};
