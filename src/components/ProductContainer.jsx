import React from "react";

const ProductContainer = ({ product }) => {
  const { id, image, rating, name, price, keywords } = product;

  //function to render start rating
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;
    for (let i = 1; i <= fullStars; i++) {
      stars.push(
        <span
          key={i}
          className="star filled"
          // className={`star ${i <= stars ? "filled" : "empty"}`}
          role="img"
          aria-label="{`Star ${i}`}">
          ★
        </span>
      );
    }

    //render a half star
    if (remainder >= 0.25 && remainder < 0.75) {
      stars.push(
        <span key="half" className="star" role="img" aria-label="Half Star">
          ★
        </span>
      );
    }

    //render an empty
    else if (remainder > 0.75) {
      stars.push(
        <span key="full" className="star" role="img" aria-label="Full Star">
          ★
        </span>
      );
    }

    return stars;
  };

  const BACKEND = "http://localhost:3000";

  return (
    <div className="card">
      <div className="image">
        <img src={`${BACKEND}/images/products/${image}`} alt={name} />
      </div>
      <button className="store">Offical store</button>
      <div className="card-details">
        <h2 className="name">{name}</h2>
        <p className="price">Price: ${price.toFixed(2)}</p>
        <div className="product-rating">
          {renderRatingStars(rating.stars)}
          <span className="rating-count">({rating.count}) reviews</span>
        </div>
        <p className="keyword">Keyword: {keywords.join(", ")}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductContainer;
