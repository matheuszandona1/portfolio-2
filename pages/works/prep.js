import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Preparatório CDM <Badge>2022</Badge>
      </Title>
      <P>
        A preparatory for those who will provide tests for medical residency
      </P>
      <P>This product has more than 70k students since its launch.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, PHP, SASS, JavaScript</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/prep1.png" alt="Preparatório CDM" />
      <WorkImage src="/images/works/prep2.png" alt="Preparatório CDM" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
