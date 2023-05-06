import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return <h2 className="text-2xl font-bold text-primary-500">{children}</h2>;
};

export default HText;
