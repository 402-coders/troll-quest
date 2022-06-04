import trollRun from '~/assets/troll/troll-run.gif';

export const Loader = () => {
  return (
    <div className=" w-screen h-screen pt-20 flex flex-col bg-secondary items-center ">
      <h1 className="my-8 text-3xl font-bold">Wczytuję ...</h1>
      <img src={trollRun} alt="walking troll" className="w-4/12" />
    </div>
  );
};
