interface IntroductionProps {
  header: string;
  text: string;
}

const Introduction = ({ header, text }: IntroductionProps) => {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl max-w-2xl tracking-tight leading-snug lg:leading-snug font-bold mb-4">
        {header}
      </h2>
      <p className="max-w-2xl text-md text-gray-500 lg:text-10xl leading-normal">
        {text}
      </p>
    </div>
  );
};

export default Introduction;
