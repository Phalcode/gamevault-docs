import React from "react";
import { ImageZoomProvider } from "../components/image-zoom/ImageZoomProvider";

export default function Root({ children }) {
  return <ImageZoomProvider>{children}</ImageZoomProvider>;
}
