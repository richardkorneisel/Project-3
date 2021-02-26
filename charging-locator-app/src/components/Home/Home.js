import { Component } from "react";
import Search from "../Search/Search";
import Results from "../Results/Results";


export default class Home extends Component{

	render() {

		console.log('home this.props:', this.props)
		
		return (
			<div className="home">
				   <h2>Test Search Input: Home Component</h2>
          <input type='integer' placeholder='latitude' onChange={this.props.addLat} />
          <br/>
          <input type='integer' placeholder='longitude' onChange={this.props.addLon} />
          <br/>
          <input type='integer' placeholder='distance' onChange={this.props.addDistance} />
          <br/>
          <button onClick={this.props.getResults}>Submit</button>
					<div><Search/></div>
					<div><Results/></div>
			</div>
		)
	}
}
