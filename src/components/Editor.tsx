import React from "react";
import Image from "next/image";

const Editor = () => {
  return (
    <div>
      {/* Image from the public folder */}
      <Image
        src="/Editor.png" // Image path in the public folder
        alt="Editor Image"
        width={3000} // Adjust the width as needed
        height={300} // Adjust the height as needed
      />
    </div>
  );
};

export default Editor;
