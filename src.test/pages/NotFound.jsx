import Layout from "../components/Layout";
// import DevDump from "../components/DevDump";
import Container from "../components/Container";
import Error from "../components/Error";

export default function NotFound() {
  return (
    <Layout>
      <Container>
        {/* <DevDump /> */}
        <Error />
      </Container>
    </Layout>
  );
}
