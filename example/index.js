
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Chart from '../index'

class App extends Component {
  componentDidMount() {
    this.a = new Chart({
      target: this.refs.a
    })

    this.b = new Chart({
      target: this.refs.b,
      radius: 30
    })

    const total = 3000

    this.c = new Chart({
      target: this.refs.c,
      thickness: 1,
      format: d => `${total * d | 0}ms`,
      ease: 'easeElastic',
      duration: 600
    })

    this.a.render({ value: .3 })
    this.b.render({ value: .3 })
    this.c.render({ value: .3 })
  }

  componentDidUpdate() {
    this.changeData()
  }

  changeData = _ => {
    this.a.update({ value: Math.random() })
    this.b.update({ value: Math.random() })
    this.c.update({ value: Math.random() })
  }

  render() {
    return <div>
      <div id="actions">
        <button onClick={this.changeData}>Animate</button>
      </div>

      <section>
        <h3>Defaults</h3>
        <p>Chart default settings.</p>
        <svg ref="a" className="chart"></svg>
      </section>

      <section>
        <h3>Small</h3>
        <p>Chart with a smaller size.</p>
        <svg ref="b" className="chart"></svg>
      </section>

      <section>
        <h3>Kitchen Sink</h3>
        <p>Chart with most settings configured.</p>
        <svg ref="c" className="chart"></svg>
      </section>

      <section>
        <h3>Reference</h3>
        <p>Chart reference image.</p>
        <img src="chart.png" width={150} />
      </section>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))