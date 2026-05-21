// Components
import Teacher from './Teachers'

// Constants
import { constantsTeachers } from './constantsTeachers'

// Styles
import { Container } from '../../styles'

const ContainerTeachers = () => {
  return (
    <Container container spacing={10}>
      {constantsTeachers.map((teacher) => (
        <Teacher key={teacher.name} {...teacher} />
      ))}
    </Container>
  )
}

export default ContainerTeachers
