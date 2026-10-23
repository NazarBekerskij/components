import { Component } from 'react'

class Form extends Component {
  render() {
    const {
      name,
      quanity,
      price,
      handleChange,
      handleSubmit,
    } = this.props

    return (
      <form className="shopping-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Назва товару
          <input
            className="form-input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          Кількість
          <input
            className="form-input"
            type="number"
            name="quanity"
            min="1"
            step="1"
            value={quanity}
            onChange={handleChange}
            required
          />
        </label>

        <label className="form-label">
          Ціна за одиницю (грн)
          <input
            className="form-input"
            type="number"
            name="price"
            min="0"
            step="0.01"
            value={price}
            onChange={handleChange}
            required
          />
        </label>

        <button className="form-button" type="submit">
          Додати товар
        </button>
      </form>
    )
  }
}

export default Form