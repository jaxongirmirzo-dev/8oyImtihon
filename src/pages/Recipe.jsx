function Recipe({ recipe, key }) {
  console.log(recipe);
  return (
    <>
      <li>
        <h1>{recipe.title}</h1>
      </li>
    </>
  );
}

export default Recipe;
