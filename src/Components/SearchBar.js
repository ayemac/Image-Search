import React from 'react'
import SearchResults from './SearchResults'
import axios from 'axios';

const API_KEY = `${process.env.REACT_APP_IMAGE_SEARCH}`

 class SearchBar extends React.Component {
     state = {
         value: "",
         searchResult:[]
     }

     handleChange = (e) =>{
         this.setState({
             value: e.target.value
         })
     }
     handleSubmit = (e) => {
         e.preventDefault()
         const searchValue = this.state.value
         axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=15&orientation=landscape&query=${searchValue}}`).then(res => {
             this.setState({
                 
                 searchResult: res.data.results
             })     
 })
     }
     

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit} className="search-container">
                  <input
                        class="field-container"
                        type='text'
                        value={this.state.value}
                        placeholder="Search Images..."
                        onChange={this.handleChange}/>
             
          <button className="btn-warning" type="submit"><i class="fa fa-search"></i></button>
          </form>
          <SearchResults results={this.state.searchResult}/>
      </div>
    )
  }
}

export default SearchBar
