import { Link, Title, Container, Text, ContentWrap } from "./Home.styled";

export const Home = () => {
  return (
		<Container>
			<ContentWrap>
			<Title>
				Welcome to Tweets App
			</Title>
			<Link to="/tweets">				
				<Text>Tweets</Text>
				</Link>
			</ContentWrap>
    </Container>
  );
};