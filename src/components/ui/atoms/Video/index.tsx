import { LegacyRef } from "react";

const Video = ({
  src,
  type,
  innerRef,
}: {
  src: string;
  type: string;
  innerRef: LegacyRef<any> | undefined;
}) => {
  return (
    <video width="100%" ref={innerRef} autoPlay loop controls>
      <source src={src} type={type} />
    </video>
  );
};

export default Video;
