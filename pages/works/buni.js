import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="b.Uni">
    <Container>
      <Title>
        b.Uni <Badge>2022</Badge>
      </Title>
      <P>
        A fintech created for university students. They are focused on helping
        the student throughout their graduation, helping with a career tip-off
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.buni.digital/">
            https://www.buni.digital/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, SASS, JQuery</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/buni1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/buni2.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
