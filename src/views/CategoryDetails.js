import React, { Component } from "react";

export default class CategoryDetails extends Component {
  state = { categories: null };

  render() {
    const { match } = this.props;
    const { categories } = this.state;

    return (
      <div>
        {categories && (
          <h5>
            Category Details {categories.name} {match.params.catId}
          </h5>
        )}
      </div>
    );
  }
}
