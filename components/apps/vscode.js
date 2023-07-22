import React from "react";

export default function VsCode() {
  return (
    <iframe
      src="https://vscode.dev/"
      title="VsCode"
      className="h-full w-full bg-ub-cool-grey"
    ></iframe>
  );
}

export const displayVsCode = () => {
  <VsCode> </VsCode>;
};
