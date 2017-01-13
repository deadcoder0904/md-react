import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'
import './index.css'

class Markdown extends Component {
	constructor() {
		super()
		this.handleChange = this.handleChange.bind(this)
		this.renderMD = this.renderMD.bind(this)
		this.state = {
			md:
`# It is only after losing everything we are free to do anything\n>― Chuck Palahniuk, Fight Club\n\n\n
![](https://s3.scoopwhoop.com/anj/d/679168237.png)
![](https://s3.scoopwhoop.com/anj/d/241744703.png)
![](https://s3.scoopwhoop.com/anj/d/162169912.png)
![](https://s3.scoopwhoop.com/anj/d/851041918.png)
![](https://s3.scoopwhoop.com/anj/d/931426082.png)
![](https://s3.scoopwhoop.com/anj/d/522217991.png)
![](https://s3.scoopwhoop.com/anj/d/588659510.png)
![](https://s3.scoopwhoop.com/anj/d/516330237.png)
![](https://s3.scoopwhoop.com/anj/d/489363159.png)
![](https://s3.scoopwhoop.com/anj/d/617807529.png)
# You are not your job, you're not how much money you have in the bank. You are not the car you drive.You're not the contents of your wallet. You are not your fucking khakis. You are all singing, all dancing crap of the world.\n> ― Chuck Palahniuk, Fight Club\n\n\n
![](https://s3.scoopwhoop.com/anj/d/773489722.png)
![](https://s3.scoopwhoop.com/anj/d/386333665.png)
![](https://s3.scoopwhoop.com/anj/d/693709654.png)
![](https://s3.scoopwhoop.com/anj/d/543988627.png)
![](https://s3.scoopwhoop.com/anj/d/623967682.png)
![](https://s3.scoopwhoop.com/anj/d/193064855.png)
![](https://s3.scoopwhoop.com/anj/d/264283272.png)
![](https://s3.scoopwhoop.com/anj/d/225243268.png)
![](https://s3.scoopwhoop.com/anj/d/238186778.png)
# Warning: If you are reading this then this warning is for you. Every word you read of this useless fine print is another second off your life. Don't you have other things to do? Is your life so empty that you honestly can't think of a better way to spend these moments? Or are you so impressed with authority that you give respect and credence to all that claim it? Do you read everything you're supposed to read? Do you think every thing you're supposed to think? Buy what you're told to want? Get out of your apartment. Meet a member of the opposite sex. Stop the excessive shopping and masturbation. Quit your job. Start a fight. Prove you're alive. If you don't claim your humanity you will become a statistic. You have been warned.\n> ― Chuck Palahniuk, Fight Club\n\n\n
![](https://s3.scoopwhoop.com/anj/d/295051118.png)
![](https://s3.scoopwhoop.com/anj/d/633001553.png)
![](https://s3.scoopwhoop.com/anj/d/877763236.png)
![](https://s3.scoopwhoop.com/anj/d/151780455.png)
![](https://s3.scoopwhoop.com/anj/d/847281830.png)
			`
		}
	}

	renderMD(md) {
		return marked(md);
	}

	handleChange(e) {
		const md = e.target.value
		this.setState({
			md
		})
	}

	render() {
		return (
				<div>
					<h1 id="tagline">Markdown React</h1>
					<div id="app">
						<textarea name="edit" id="edit" cols="30" rows="15" value={this.state.md} onChange={this.handleChange}></textarea>
						<div id="md" dangerouslySetInnerHTML={{ __html: this.renderMD(this.state.md)}}></div>
					</div>
				</div>
			)
	}
}

ReactDOM.render(<Markdown />, document.getElementById('app'));
