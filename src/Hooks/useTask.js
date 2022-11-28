function useTask(
  contador,
  textoTarea,
  contadorSet,
  textoSet,
  descripcion,
  descripcionSet
) {
  const guardar = (e) => {
    alert(textoTarea);
    if (textoTarea !== "") {
      localStorage.setItem(contador, JSON.stringify([textoTarea, descripcion]));
      alert("Nueva Tarea agregada");
      contadorSet("");
      textoSet(lastDate + 1);
      descripcionSet(lastDate + 1);
    } else {
      alert("Añada una descripcion");
    }
  };

  return { guardar };
}
export default useTask;
