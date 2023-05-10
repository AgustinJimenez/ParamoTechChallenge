import Image from "next/image";

const PageHeaderLogo = () => {
  return (
    <Image src="/logo.png" width={50} height={50} alt="Picture of the author" />
  );
};

export default PageHeaderLogo;
