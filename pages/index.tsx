import { Container } from "@/components";
import { PublicLayout } from "@/layouts";

const Home = () => {
  return (
    <PublicLayout>
      <section>
        <Container width="primary">
          <h1>Home Page</h1>
        </Container>
      </section>
    </PublicLayout>
  );
};

export default Home;
