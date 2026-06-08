import { useForm } from "react-hook-form";

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h2>Novo Requerimento</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Tipo de Requerimento</label>

          <select
            {...register("tipo", {
              required: "O tipo de requerimento é obrigatório",
            })}
          >
            <option value="">Selecione</option>
            <option value="declaracao">Declaração</option>
            <option value="historico">Histórico Escolar</option>
            <option value="boleto">2ª Via de Boleto</option>
          </select>

          {errors.tipo && <p>{errors.tipo.message}</p>}
        </div>

        <div>
          <label>Descrição</label>

          <textarea
            {...register("descricao", {
              required: "A descrição é obrigatória",
              minLength: {
                value: 10,
                message:
                  "A descrição deve ter pelo menos 10 caracteres",
              },
            })}
          />

          {errors.descricao && (
            <p>{errors.descricao.message}</p>
          )}
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default RequerimentoForm;
