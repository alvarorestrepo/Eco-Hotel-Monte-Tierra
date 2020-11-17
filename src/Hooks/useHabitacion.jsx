import { graphql, useStaticQuery } from "gatsby"

const UseHabitacion = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
        nodes {
          tituto
          contenido
          slug
          id
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
    titulo: habitacion.tituto,
    id: habitacion.id,
    imagen: habitacion.imagen,
    contenido: habitacion.contenido,
    slug: habitacion.slug,
  }))
}

export default UseHabitacion
