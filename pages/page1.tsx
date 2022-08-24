import { NextPage } from "next";
type propsType = {
  data: string;
};
const Page1: NextPage<propsType> = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <p className="text-[50px] text-white cursor-pointer select-none hover:text-[60px] duration-200">
        {data}
      </p>
    </div>
  );
};

const getServerSideProps = async () => {
    const promise = () => new Promise<string>((resolve) => {
        setTimeout(() => resolve('Hello'), 3000)
    })
  const data = await promise()
  return {
    props: {
      data
    },
  };
};
export { getServerSideProps };
export default Page1;
