interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Catalog(props: ProductProps) {
  const [id, color, name] = props.params.data

  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{color}</li>
        <li>{name}</li>
      </ul>
    </div>
  )
}
