import React from "react";

interface IKeywordBadge {
  title: string;
}

const KeywordBadge = (props: IKeywordBadge) => {
  const { title } = props;
  return <span className="border px-2 py-1 rounded border-lightGray bg-[#d7d7d789]">{title}</span>;
};

export default KeywordBadge;
