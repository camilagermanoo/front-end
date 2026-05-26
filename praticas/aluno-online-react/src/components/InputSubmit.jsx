function InputSubmit({texto}) {
    return (
    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium rounded-lg w-full py-2 mt-6 transition"
            type="submit">{texto}
    </button>
    );
}

export default InputSubmit;
