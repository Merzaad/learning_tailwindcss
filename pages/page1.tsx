import { NextPage } from "next";
type propsType = {
  data: string;
};
const Page1: NextPage<propsType> = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-sky-900 to-stone-900">
      <div
        className="flex justify-center items-center w-24 h-8
                   bg-cyan-700/50 hover:scale-110 duration-200 rounded-lg cursor-pointer
                   shadow-sm shadow-cyan-900/75"
      >
        <p className="text-[10px] text-white  select-none ">{data}</p>
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
