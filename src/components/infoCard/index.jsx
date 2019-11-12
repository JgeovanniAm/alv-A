import React, { Component } from 'react';
import './styles.scss';

export default class extends Component {
  state = {
    data_object: this.props.data.item,
    available_C: [],
    available_S: [],
  }

  componentDidMount() {
    this.setState({ data_object: this.props.data.item }, () => {
      this.processFilter();
    });
  }

  processFilter = () => {
    if (this.state.data_object) {
      const filterColor = this.props.data.allData.filter(item => item.name === this.state.data_object.name && item.model === this.state.data_object.model);
      let bItem = '';
      const filterEndColor = filterColor.filter((item) => {
        if (bItem === item.color);
        else {
          bItem = item.color;
          return item;
        }
      });
      this.setState({ available_C: filterEndColor });
    }
    if (this.state.data_object) {
      const filterSizes = this.props.data.allData.filter(item => item.name === this.state.data_object.name && item.model === this.state.data_object.model);
      const mapSize = filterSizes.map(item => item.size);
      const filterEndSizes = new Set(mapSize);
      this.setState({ available_S: filterEndSizes });
    }
  }

  actionColorbtn = (item) => {
    this.setState({ data_object: item })
  }

  render() {
    console.log(this.state.available_S)

    return (
      <>
        {this.state.data_object &&
          <div className="info-card">
            <div className="info-card__wrapper-img">
              <img className="info-card__img" src={this.state.data_object.url} alt="hola" />
            </div>
            <div className="info-card__wrapper-txt">
              <h2 className="info-card__name">{this.state.data_object.name} </h2>
              <h3 className="info-card__model">{this.state.data_object.model} </h3>
              <h3 className="info-card__brand">{this.state.data_object.brand} </h3>
              <p className="info-card__description"> {this.state.data_object.description}</p>
              <h3 className="info-card__price">price: ${this.state.data_object.price}</h3>
              <div className="info-card__wrapper-filter wrapper-color">
                {
                  this.state.available_C.map((item, index) => (
                    <button className="info-card__btn-color" onClick={() => this.actionColorbtn(item)} key={index}>
                      <img src={item.url} alt={item.name} />
                    </button>
                  ))
                }
              </div>
            
            </div>
            <button onClick={this.props.closeWindow} className="info-card__come-back">comeback</button>
          </div>
        }
      </>
    )
  }
}