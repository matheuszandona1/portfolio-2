import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbBuni from '../public/images/works/buni1.png'
import thumbPrep from '../public/images/works/prep1.png'

const Works = () => (
  <Layout title="Works">
    <Container marginTop={'60px'}>
      <Heading as="h3" fontSize={20} mb={4}>
        Best Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="buni" title="b.Uni" thumbnail={thumbBuni}>
            A landing-page for a fintech based in Brazil.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="prep"
            title="Preparatório CDM"
            thumbnail={thumbPrep}
          >
            A preparatory for future medical experts.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
