import { NextPage } from "next";
type propsType = {
  data: string;
};
const Page1: NextPage<propsType> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen bg-gradient-to-b from-sky-900 to-stone-900">
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
      <div className="box-border h-8 px-16 w-1/4 bg-teal-700/60"  />
      <div className="box-content h-8 px-16 w-1/4 bg-cyan-500/30 border border-sky-500/50 rounded-sm"  />
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
