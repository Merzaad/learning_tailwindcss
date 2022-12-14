import { NextPage } from "next";
type propsType = {
  data: string;
};
const Page1: NextPage<propsType> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 justify-center h-screen items-center bg-gradient-to-b from-sky-900 to-stone-900">
      <div
        className="flex justify-center items-center w-24 h-8
                   bg-cyan-700/50 hover:scale-110 duration-200 rounded-lg cursor-pointer
                   shadow-sm shadow-cyan-900/75 backdrop-blur-lg"
      >
        <p className="text-[10px] text-cyan-300  select-none ">{data}</p>
      </div>
      <div className="flex justify-center items-center gap-12 w-320">
        <div className="flex justify-center items-center bg-cyan-700/50 w-32 h-16 rounded-md grow text-sky-300">
          <div className="w-3/4 h-3/4 rounded-md  bg-teal-700/50" />
        </div>
        <div className="bg-cyan-700/50 w-32 h-20 rounded-lg grow">
          <div className="w-1/2 h-full m-auto rounded-md  bg-teal-500/50" />
        </div>
      </div>
      <div className="box-border h-8 px-16 w-1/4 bg-teal-700/60" />
      <div className="box-content h-8 px-16 w-1/4 bg-cyan-500/30 border border-sky-500/50 rounded-sm" />
      <div className="flex gap-2 items-baseline justify-center w-32 border h-16 border-sky-100/20 rounded-sm">
        {[...Array(3)].map((x, i) => (
          <div
            key={i}
            className={`flex items-center text-teal-400 justify-center w-8 h-${
              i + 1
            }/4  bg-teal-500/70`}
          >
            line
          </div>
        ))}
      </div>
      <div className="w-11/12 md:w-1/2 font-sans text-sm  text-teal-100 font-semibold tracking-widest leading-loose">
        By default, Tailwind provides three font family utilities: a cross-browser sans-serif stack,
        a cross-browser serif stack, and a cross-browser monospaced stack. Tailwind lets you
        conditionally apply utility classes in different states using variant modifiers. You can
        also use variant modifiers to target media queries like responsive breakpoints, dark mode,
        prefers-reduced-motion, and more.
      </div>
    </div>
  );
};

const getServerSideProps = async () => {
  const promise = () =>
    new Promise<string>((resolve) => {
      setTimeout(() => resolve("HELLO TAILWIND"), 3000);
    });
  const data = await promise();
  return {
    props: {
      data,
    },
  };
};
export { getServerSideProps };
export default Page1;
