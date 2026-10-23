import { Component } from 'react'
import './App.css'

import { nanoid } from 'nanoid'

import Title from './components/Title/Title'
import Form from './components/Form/Form'
import ProductList from './components/ProductList/ProductList'

class App extends Component {
  state = {
    name: "",
    quanity: "1",
    price: "",
    products: [],
  }


  componentDidMount(){
    const savedContact = window.localStorage.getItem("products")

    if(savedContact){
      this.setState({
        products: JSON.parse(savedContact)
      })
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState.products !== this.state.products){
      window.localStorage.setItem("products", JSON.stringify(this.state.products))
    }
  }

  handleDelete = (productsId) => {
    this.setState((prev) => ({
      products: prev.products.filter(product => product.id !== productsId)
    }))
  }

  handleChange = (e) => {
    const {name, value} = e.target 

    this.setState({[name]: value}) 
  }

  handleSubmit = (e) => {
   e.preventDefault()

   const {name, quanity, price} = this.state

    const newProduct = {
      id: nanoid(),
      name,
      quanity: Number(quanity),
      price: Number(price),
    }

    this.setState((prev) => ({
      products: [...prev.products, newProduct],
      name: "",
      quanity: 1,
      price: '',
    }))
  }

  render(){
    const {name, quanity, price,products} = this.state
    return(
      <>
      <Title/>
      <Form
      name={name}
      quanity={quanity}
      price={price}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      />

      <ProductList 
      products={products}
      handleDelete={this.handleDelete}
      />
      </>
    )
  }
}


export default App
