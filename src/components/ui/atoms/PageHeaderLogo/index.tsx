import Image from "next/image";

const PageHeaderLogo = () => {
  return (
    <a href="/">
      <Image
        src="/logo.png"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </a>
  );
};

export default PageHeaderLogo;
