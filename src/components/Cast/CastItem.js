export const CastItem = ({ item }) => {
  return (
    <>
      <img
        src={'https://www.themoviedb.org/t/p/w400' + item.profile_path}
        alt={item.name}
        width="100"
      />

      <p>{item.name}</p>
      <p>{item.character}</p>
    </>
  );
};
