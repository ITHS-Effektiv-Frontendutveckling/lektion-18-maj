function Pokemon({ name, update }) {
  return (
    <article>
      <p onClick={ () => { update(name) } }>{ name }</p>
    </article>
  )
}

export default Pokemon;