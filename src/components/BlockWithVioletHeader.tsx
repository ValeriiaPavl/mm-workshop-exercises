interface BlockWithVioletHeaderProps {
  violetHeader: string;
  blackHeader: string;
  text: string;
}

const BlockWithVioletHeader = ({
  violetHeader,
  blackHeader,
  text,
}: BlockWithVioletHeaderProps) => {
  return (
    <div className="container flex items-center justify-center p-8 w-full mb-6 mx-auto mt-12">
      <div className="flex flex-col items-center justify-center">
        <p className="uppercase text-indigo-600 text-xs font-bold mt-3">
          {violetHeader}
        </p>
        <h2 className="text-3xl max-w-2xl tracking-tight leading-snug lg:leading-snug font-bold mb-4">
          {" "}
          {blackHeader}
        </h2>
        <p className="max-w-2xl text-md text-center text-gray-500 lg:text-xl leading-normal">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BlockWithVioletHeader;
