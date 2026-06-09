import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Main from "../components/Main";

function RequerimentoForm() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("pt-BR");

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      data: today,
    },
  });

  function onSubmit(dados) {
    console.log("Novo requerimento:", dados);
    reset({ data: today });
    navigate("/requerimentos");
  }

  return (
    <Main titulo="Meus Requerimentos" subtitulo="Novo Requerimento">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-2xl">

        <div className="flex flex-col gap-1">
          <label htmlFor="tipo" className="font-semibold">Tipo de Requerimento</label>
          <select
            id="tipo"
            className="border border-gray-400 rounded-lg px-3 py-2 w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#303030]"
            {...register("tipo", { required: "Tipo é obrigatório" })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Revisão de Menção">Revisão de Menção</option>
            <option value="Dispensa de Disciplina">Dispensa de Disciplina</option>
            <option value="Trancamento de Matrícula">Trancamento de Matrícula</option>
            <option value="Mudança de Turno">Mudança de Turno</option>
            <option value="Renovação de Matrícula">Renovação de Matrícula</option>
          </select>
          {errors.tipo && (
            <span role="alert" className="text-red-600 text-sm">{errors.tipo.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="descricao" className="font-semibold">Descrição</label>
          <textarea
            id="descricao"
            rows={6}
            placeholder="Descreva o motivo da solicitação..."
            className="border border-gray-400 rounded-lg px-3 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-[#303030]"
            {...register("descricao", {
              required: "Descrição é obrigatório",
              minLength: {
                value: 10,
                message: "A descrição deve ter no mínimo 10 caracteres.",
              },
            })}
          />
          {errors.descricao && (
            <span role="alert" className="text-red-600 text-sm">{errors.descricao.message}</span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="data" className="font-semibold">Data do Requerimento</label>
          <input
            id="data"
            type="text"
            readOnly
            className="border border-gray-400 rounded-lg px-3 py-2 bg-gray-100 text-gray-600 cursor-default focus:outline-none"
            {...register("data")}
          />
        </div>

        <div className="flex gap-3 mt-2">
          <button
            type="button"
            onClick={() => navigate("/requerimentos")}
            className="px-5 py-2 rounded-lg border border-gray-400 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg border border-gray-400 font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Salvar
          </button>
        </div>

      </form>
    </Main>
  );
}

export default RequerimentoForm;
