
function Favorites({ favorites }) {
  return (
    <section className="favorites-page">
      <h1>My Favorites</h1>
      <p>Your saved cars in one place.</p>

      {favorites.length === 0 ? (
        <p>You haven't added any favorite cars yet.</p>
      ) : (
        <div className="featured-cars">
          {favorites.map((car) => (
            <div className="car-card" key={car.name}>
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favorites;