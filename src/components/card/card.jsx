function Card({ data, handleDelete, handleEdit }) {
  const { bairro, localidade, cep, uf } = data
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-10">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <h3 className="text-lg font-medium leading-6 text-gray-900">CEP CADASTRADOS</h3>
        <div className="flex items-center justify-between">
          <button
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={handleEdit}
            name={cep}
          >
            EDITAR
          </button>

          <button
            className="bg-red-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            type="button"
            onClick={handleDelete}
            name={cep}
          >
            DELETAR
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">CEP</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{cep}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">BAIRRO</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{bairro}</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">LOCALIDADE</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{localidade}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">ESTADO</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{uf}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default Card
