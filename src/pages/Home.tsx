import {useEffect, useState} from "react";
import {Link} from "react-router";
import styled from "styled-components";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type ApiResponse = Post[];

const Container = styled.div`
    padding: 24px;
    box-sizing: border-box;
`;
const Title = styled.h2`
    margin-bottom: 20px;
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li`
    padding: 16px;
    border-bottom: 1px solid #ddd;

    a {
        text-decoration: none;
        color: #333;
        font-size: 18px;
        font-weight: bold;

    }

`;

function Home() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState<Post[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((data: ApiResponse) => {
                setList(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <>
            <Container>
                <Title>게시판</Title>
                <List>
                    {list.map(
                        (item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Link
                                        // to={"/detail/" + item.id}>
                                        to={`/detail/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </ListItem>
                            )
                        }
                    )}
                </List>
            </Container>
        </>


    );
}

export default Home;