export default class Views extends React.Component{
	render(){
		return 	(<div className="views">
					<div className="view">{this.props.children}</div>
				</div>)
	}
}