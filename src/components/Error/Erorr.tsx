import { AiOutlineInfoCircle } from "react-icons/ai";
import { ReactComponent as ErrorIcon } from "@root/assets/icons/cabo-desconectado.svg";

type ErrorProps = {
  lead?: string;
  title?: string;
  message?: string;
};

const Error = ({
  lead = "erro",
  title = "Ops, algo deu errado :(",
  message = "Erro ao carregar as informações. Tente novamente mais tarde.",
}: ErrorProps) => {
  return (
    <div className="flex flex-col lg:flex-row py-10 gap-8">
      <ErrorIcon width="100%" height="100%" className="flex-grow basis-1/2" />
      <div className="flex flex-col flex-grow basis-1/2 gap-4 w-full">
        <h1 className="inline-flex mt-0 bg-transparent text-gray-300 text-lg md:text-md font-extrabold uppercase tracking-widest">
          {lead}
        </h1>
        <h2 className="flex gap-3 items-center text-3xl md:text-2xl">
          <AiOutlineInfoCircle size={30} />
          {title}
        </h2>
        <h2 className="text-lg md:text-xl">{message}</h2>
      </div>
    </div>
  );
};
export default Error;
