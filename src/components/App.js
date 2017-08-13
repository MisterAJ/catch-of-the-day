import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';
import samplesFishes from '../sample-fishes';

class App extends React.Component {
    constructor() {
        super();

        this.addFish = this.addFish.bind(this);
        this.loadSamples = this.loadSamples.bind(this);

        // Initial State
        this.state = {
            fishes: {},
            order: {}
        }
    }

    addFish(fish) {
        // copy state
        const fishes = {...this.state.fishes};
        // add in new fish
        const timestamp = Date.now();
        fishes[`fish-]${timestamp}`] = fish;
        // set state
        this.setState({ fishes })
    }

    loadSamples() {
        this.setState( {
            fishes: samplesFishes
        })
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="list-of-fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key => <Fish key={key} details={
                                    this.state.fishes[key]
                                }/>)
                        }
                    </ul>
                </div>
                <Order/>
                <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
            </div>
        )
    }
}

export default App;