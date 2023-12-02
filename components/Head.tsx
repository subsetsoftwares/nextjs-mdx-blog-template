import NextHead from "next/head";
import React from "react";

const Header: React.FC = () => {
  return (
    <NextHead>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Header;
