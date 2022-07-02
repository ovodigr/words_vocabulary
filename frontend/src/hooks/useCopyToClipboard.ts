import React, { useState } from "react";
import copy from "copy-to-clipboard";

export const useCopyToClipboard = (defaultValue: boolean = false): [boolean, (text: string | number) => void] => {

  const [isCopied, setCopied] = useState<boolean>(defaultValue);

  function handleCopy(text: String | Number) {

    copy(text.toString());

    setCopied(true);

  }
  return [isCopied, handleCopy];
}