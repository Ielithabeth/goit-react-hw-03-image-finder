import { Component } from "react";
import '../styles.css'

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { fetchImages } from "fetchImages";

let page = 1;

export class App extends Component {
  state = {
    inputValue: '',
    items: [],
    status: 'empty',
    totalHits: 0,
  };

  handleSubmit = async inputValue => {
    page = 1;

    try {
      this.setState({ status: 'pending' });
      const { totalHits, hits } = await fetchImages(inputValue, page);

      if (hits.length < 1) {
        this.setState({ status: 'empty' });
      } else {
        this.setState({
          items: hits,
          inputValue,
          totalHits: totalHits,
          status: 'resolved',
        });
      }
    } 
    
    catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  handleNextPage = async () => {
    this.setState({ status: 'pending' });

    try {
      const { hits } = await fetchImages(this.state.inputValue, (page += 1));
      this.setState(prevState => ({
        items: [...prevState.items, ...hits],
        status: 'resolved',
      }));
    } catch (error) {
      this.setState({ status: 'rejected' });
    }
  };

  render () {
    const { items, status, totalHits } = this.state;
  
    return (
    <>
      <Searchbar onSubmit={this.handleSubmit}/>
      
      {status === 'pending' && (
        <>
          <ImageGallery page={page} items={this.state.items}/>
          <Loader/>
          {totalHits > 12 && <Button onClick={this.handleNextPage} />}
        </>
      )}

      {status === 'rejected' && (
        <p>Something went wrong, try later</p>
      )}

      {status === 'resolved' && (
        <>
          <ImageGallery page={page} items={this.state.items} />
          {totalHits > 12 && totalHits > items.length && (<Button onClick={this.handleNextPage} />)}
        </>
      )}
    </>
    )
  }
};
