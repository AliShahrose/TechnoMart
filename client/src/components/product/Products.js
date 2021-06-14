import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { getProductsAction } from "../../actions/product";

const Products = ({ getProductsAction, products, isLoaded }) => {
  useEffect(() => {
    getProductsAction();
  }, [getProductsAction]);
  return (
    isLoaded &&
    products !== null && (
      <Fragment>
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-3" key={product.id}>
              <div className="center">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "30%",
                    height: "30%",
                  }}
                />
              </div>
              <h3 className="text">{product.title}</h3>
              <p>SEK {product.price}</p>
            </div>
          ))}
        </div>
      </Fragment>
    )
  );
};

Products.propTypes = {
  getProductsAction: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
  products: state.product.products,
  isLoaded: state.product.isLoaded,
});

export default connect(stateToProps, { getProductsAction })(Products);
