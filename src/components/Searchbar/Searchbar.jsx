import { Component } from "react";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
    state = {
        inputValue: '',
    }

    handleInputChange = e => {
        this.setState({ inputValue: e.currentTarget.value.trim().toLowerCase() })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({ inputValue: '' });
    }

    render() {
        const { inputValue } = this.state;

        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="button-label">🔍︎</span>
                    </button>
          
                    <input
                      className="SearchForm-input"
                      name="inputData"
                      value={inputValue}
                      onChange={this.handleInputChange}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propType = {
    onSubmit: PropTypes.func.isRequired,
  };